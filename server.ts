/*
server.js

		___  ___ _____ _      _   __   __
		|  \/  ||  ___| |    | |  \ \ / /
		| .  . || |__ | |    | |   \ V / 
		| |\/| ||  __|| |    | |    \ /  
		| |  | || |___| |____| |____| |  
		\_|  |_/\____/\_____/\_____/\_/  
		
			WRITTEN BY xMellylicious.
					  
			   ALL RIGHTS RESERVED   
	
*/

/* 
========== [ VERSION HISTORY ] ==========
[24-11-24] - Initial Commit
---> [+] Added Server Class
	 ---> [+] Auto Route Compiler
*/

// DotEnv Config
import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import ratelimit from "express-rate-limit"

// ===== ROUTES ===== //
import rankCheckRoute from "./routes/rankCheck.route"

// ===== EXPRESS ===== //
const app = express()
const port = process.env.PORT || 12333

// ===== SERVER ===== //
class Server {
    public app: express.Application;
    public port: string;

	constructor() {
        if (!process.env.RBLX_TKN) {
            console.log(`[WARNING] WORKING WITHOUT ROBLOX TOKEN`)
        }

		this.build()
	}

	async build() {
        this.app = express();
        this.port = process.env.PORT || "12333"

        //Initialise Custom Middleware
        this.initialiseMiddleware();

        //Load API Routes
        this.loadRoutes();

        //Open the API on the Specified Port
        this.listen();
    }

    //Initialise API Middleware
    initialiseMiddleware() {
        this.app.set('etag', false)
        this.app.use((req, res, next) => {
            res.set('Cache-Control', 'no-store')
            next()
          })
        //Proxy
        this.app.set('trust proxy', '127.0.0.1');

        //API Ratelimit
        this.app.use(ratelimit({
            max:10,
            windowMs: 1 * 60 * 1000
        }))

        this.app.use(express.json())
        this.app.use(cors())
    }

    //Configures API Routes
    loadRoutes() {
        this.app.use(rankCheckRoute)
    }

    //Opens a port for clients to connect to
    listen() {
        this.app.listen(this.port, () => {
            console.log(`[LISTENING] localhost:${this.port}`);
        })
    }
}

export default new Server()