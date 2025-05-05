const express= require("express");
const { registerBuyer, loginBuyer } = require("../../controllers/buyer/buyerController");
const router= express.Router();

router.post("/buyer-sign-up",registerBuyer);
router.post("/buyer-login",loginBuyer);

module.exports = router;