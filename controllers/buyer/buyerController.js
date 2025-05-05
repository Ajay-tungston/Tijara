const Buyer= require("../../models/Buyer");
const bcrypt= require("bcrypt");
const jwt=require("jsonwebtoken");
const validator = require("validator");

const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,32}$/;


const registerBuyer = async (req, res, next) => {
  try {
    const { buyerName, phone, email, password, confirmPassword } = req.body;

    if (!buyerName || !phone || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingBuyer = await Buyer.findOne({ email });
    if (existingBuyer) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newBuyer = new Buyer({
      buyerName,
      phone,
      email,
      password: hashedPassword,
    });

    await newBuyer.save();

    res.status(201).json({ message: "Buyer registered successfully" });
  } catch (error) {
    next(error); // Pass error to errorHandler
  }
};

const loginBuyer = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
     
      if (!email || !password) {
        res.status(400);
        throw new Error("Please provide both email and password");
      }
  
      const buyer = await Buyer.findOne({ email });
      if (!buyer) {
        res.status(401);
        throw new Error("Invalid email or password");
      }
  
      const isMatch = await bcrypt.compare(password, buyer.password);
      if (!isMatch) {
        res.status(401);
        throw new Error("Invalid email or password");
      }
  
      
      const accessToken = jwt.sign(
        { id: buyer._id, email: buyer.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
  
      const refreshToken = jwt.sign(
        { id: buyer._id, email: buyer.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
      );
  
      
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
  
      res.status(200).json({
        message: "Login successful",
        buyerName: buyer.buyerName,
        accessToken,
      });
    } catch (error) {
      next(error); 
    }
  };
  module.exports={registerBuyer, loginBuyer};