import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { config } from "../config"
import groupsConfig from "../data/groups.json"

const checkMainGroupRank = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req.header("User-Id")) {
            res.status(405).json({message: "User ID not provided"});
            return;
        }

        const resp = await axios({
            method: "get",
            url: `https://groups.roblox.com/v1/users/${req.header("User-Id")}/groups/roles`,
        });

        let isinGroup = false;

        for (let data of resp.data.data) {
            if (data.group.id == config.mainGroup.id) {
                isinGroup = true;
                if (data.role.rank == config.mainGroup.rankId) {
                    res.status(405).json({body: "Player is already ranked"});
                    return;
                }
                break;
            }
        }

        if (!isinGroup) {
            res.status(404).json({body: "Player is not in main group"});
            return;
        }

        req["RobloxResp"] = resp.data.data;
        next();
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const checkSubGroupRank = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req["RobloxResp"]) { res.status(500).json({message: "Roblox did not provide a response"}); return; }

        console.log(req["RobloxResp"]);

        for (let data of req["RobloxResp"]) {
            for (const [groupId, groupDetails] of Object.entries(groupsConfig)) {
                if (data.group.id == groupId) {
                    if (data.role.rank >= groupDetails.rankId) {
                        next();
                        return;
                    }
                }
            }
        }

        res.status(500).json({message: "Could not rank!"});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const updateRank = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!process.env.RBLX_TKN) {res.status(500).json({body: "Can't run the update function as no Roblox token was provided!"}); return;}

        res.status(200).json({body: "all is well"});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export { checkMainGroupRank, checkSubGroupRank, updateRank }