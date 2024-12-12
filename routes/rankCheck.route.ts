import express from "express";
import { checkRank } from "../middleware/roblox.middleware";
import { updateRank } from "../controllers/rankUpdate.controller";

const router = express.Router()

router.put('/rank', checkRank, updateRank)

export default router