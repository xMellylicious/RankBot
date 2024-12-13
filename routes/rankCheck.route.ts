import express from "express";
import { checkRank, updateRank } from "../middleware/roblox.middleware";

const router = express.Router()

router.put('/rank', checkRank, updateRank)

export default router