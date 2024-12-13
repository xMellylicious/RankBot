import express from "express";
import { checkMainGroupRank, checkSubGroupRank, updateRank } from "../middleware/roblox.middleware";

const router = express.Router()

router.post('/rank', checkMainGroupRank, checkSubGroupRank, updateRank)

export default router