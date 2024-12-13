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


import express from "express";
import { checkMainGroupRank, checkSubGroupRank, updateRank } from "../middleware/roblox.middleware";

const router = express.Router()

router.post('/rank', checkMainGroupRank, checkSubGroupRank, updateRank)

export default router