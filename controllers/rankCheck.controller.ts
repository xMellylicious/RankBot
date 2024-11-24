import { Request, Response, NextFunction } from "express";

const updateRank = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.header("UserId")) {return res.status(405).json({message: "User ID not provided"})}
        next()
    } catch (e) {
        return res.status(500).json({message:e.message})
    }
}

export {updateRank}