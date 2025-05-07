const express=require("express");
const {signUp, Login,checkResetToken, resetPassword, updateUserStatus}=require("../../controllers/admin/authController");
const router=express.Router();
const {sendOtpForPasswordReset,verifyOtpForPasswordReset}=require('../../controllers/otp/otpController')
const { refresh } = require("../../controllers/refresh/globalRefreshController");

router.post('/signup',signUp);
router.post('/adminlogin',Login);
router.post("/refresh",refresh);


router.post("/admin-reset-password", resetPassword);
router.post("/send-otp", sendOtpForPasswordReset);
router.post("/verify-otp", verifyOtpForPasswordReset);
router.post("/verify-user", updateUserStatus)

module.exports=router;