const express=require("express");
const {signUp, Login,checkResetToken, resetPassword}=require("../../controllers/admin/authController");
const router=express.Router();
const {sendOtpForPasswordReset,verifyOtpForPasswordReset}=require('../../controllers/otp/otpController')

router.post('/signup',signUp);
router.post('/adminlogin',Login);
router.get("/check-reset-token", checkResetToken);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", sendOtpForPasswordReset);
router.post("/verify-otp", verifyOtpForPasswordReset);

module.exports=router