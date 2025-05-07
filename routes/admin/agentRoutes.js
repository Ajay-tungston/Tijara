const express = require("express");
const router = express.Router();
const { addAgent } = require("../../controllers/admin/agentController");

router.post("/add-agent", addAgent);

module.exports = router;