const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin"); // adjust path if needed
require("dotenv").config();

const jwtAuthentication = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESSTOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }

    try {
      const admin = await Admin.findById(decoded.id);
      if (!admin) {
        return res.status(404).json({ message: "Unauthorized" });
      }

      req.user = decoded;
      next();
    } catch (dbErr) {
      console.error("DB error:", dbErr);
      return res.status(500).json({ message: "Server Error" });
    }
  });
};

module.exports = jwtAuthentication;
