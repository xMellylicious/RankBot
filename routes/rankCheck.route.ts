const express = require("express")
const { checkRank } = require("../middleware/rankCheck.middleware")
const { updateRank } = require("../controllers/rankCheck.controller")

const router = express.Router()

router.put('/update-rank', checkRank, updateRank)

export default router