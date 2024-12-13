import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { config } from "../config"

const checkMainGroupRank = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req.header("User-Id")) {res.status(405).json({message: "User ID not provided"}); return;}

        let isinGroup = false
        const resp = await axios({
            method: "get",
            url: `https://groups.roblox.com/v1/users/${req.header("User-Id")}/groups/roles`,
            params: {}
        })

        for (let data of resp.data.data) {
            if (data.group.id == config.mainGroup.id) {
                isinGroup = true
                if (data.role.rank == config.mainGroup.rankId) {
                    res.status(405).json({body: "Player is already ranked"})
                    return;
                }
                break
            }
        }

        if (!isinGroup) {
            res.status(404).json({body: "Player is not in main group"}); return;
        }

        next();
    } catch (e) {
        res.status(500).json({message:e.message})
        return;
    }
}

const checkSubGroupRank = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

    } catch (e) {
        res.status(500).json({message:e.message})
        return;
    }
}

const updateRank = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.status(200).json({body: "all is well"}); return;
    } catch (e) {

    }
}

export {checkMainGroupRank, checkSubGroupRank, updateRank}