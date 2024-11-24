import express from "express";
import { checkRank } from "../middleware/rankCheck.middleware";
import { updateRank } from "../controllers/rankCheck.controller";

const router = express.Router()

router.put('update-rank', checkRank, updateRank)

export default router