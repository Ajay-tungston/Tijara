const express= require("express");
const { registerBuyer, loginBuyer, resetPassword } = require("../../controllers/buyer/buyerController");
const {sendOtpForPasswordReset,verifyOtpForPasswordReset}=require('../../controllers/otp/otpController')
const router= express.Router();
const { refresh } = require("../../controllers/refresh/globalRefreshController");

router.post("/buyer-sign-up",registerBuyer);
router.post("/buyer-login",loginBuyer);
router.post("/send-otp",sendOtpForPasswordReset);
router.post("/verify-otp",verifyOtpForPasswordReset);
router.post("/buyer-reset-password", resetPassword);
router.post("/refresh-buyer", refresh);
module.exports = router;