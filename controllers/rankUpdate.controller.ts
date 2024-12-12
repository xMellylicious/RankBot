import { Request, Response, NextFunction } from "express";
import axios from "axios";

const updateRank = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
        return res.status(500).json({message:e.message})
    }
}

export {updateRank}