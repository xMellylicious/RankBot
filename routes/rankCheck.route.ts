import express from "express";
import { checkRank, updateRank } from "../middleware/roblox.middleware";

const router = express.Router()

router.post('/rank', checkRank, updateRank)

export default router