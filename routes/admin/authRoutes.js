const express=require("express");
const {signUp, Login,checkResetToken, resetPassword, updateUserStatus, getAllUsers, getUserById, deleteUser}=require("../../controllers/admin/authController");
const router=express.Router();
const {sendOtpForPasswordReset,verifyOtpForPasswordReset}=require('../../controllers/otp/otpController')
const { refresh } = require("../../controllers/refresh/globalRefreshController");
const jwtAuthentication = require("../../middleware/jwtAuthentication");

router.post('/signup',signUp);
router.post('/adminlogin',Login);
router.post("/refresh",refresh);


router.post("/admin-reset-password", resetPassword);
router.post("/send-otp", sendOtpForPasswordReset);
router.post("/verify-otp", verifyOtpForPasswordReset);
router.post("/verify-user", updateUserStatus)
router.get("/get-all-users",jwtAuthentication,getAllUsers)
router.get("/get-user/:role/:id", jwtAuthentication, getUserById);
router.post("/verify-user", jwtAuthentication, updateUserStatus)
router.delete("/delete-user/:role/:id", jwtAuthentication, deleteUser);

// router.put("/edit-user/:role/:id", jwtAuth, editUser);
module.exports=router;