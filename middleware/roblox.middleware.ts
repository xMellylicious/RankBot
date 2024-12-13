import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { config } from "../config"

const checkRank = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.header("User-Id")) {return res.status(405).json({message: "User ID not provided"})}
        
        /*axios.get(`https://groups.roblox.com/v1/groups/${config.mainGroup}`)
            .then(function(resp) {
                console.log(resp)
            })
            .catch(function(err) {
                return res.status(500).json({message: err.message})
            })
            .finally(function() {
                next()
            })*/

        axios({
            method: "get",
            url: `https://groups.roblox.com/v1/groups/${config.mainGroup}`,
            params: {}
        })

        next()
    } catch (e) {
        return res.status(500).json({message:e.message})
    }
}

const updateRank = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {

    }
}

export {checkRank, updateRank}