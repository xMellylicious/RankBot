import { Request, Response, NextFunction } from "express";
import axios from "axios";

const checkRank = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.header("User-Id")) {return res.status(405).json({message: "User ID not provided"})}
        
        axios.get(`https://groups.roblox.com/v1/groups/15294045`)
            .then(function(resp) {
                console.log(resp)
            })
            .catch(function(err) {
                return res.status(500).json({message: err.message})
            })
            .finally(function() {
                next()
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

export {checkRank}