import express from "express";
import { checkMainGroupRank, updateRank } from "../middleware/roblox.middleware";

const router = express.Router()

router.post('/rank', checkMainGroupRank, updateRank)

export default router