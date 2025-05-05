const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  buyerName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate phone numbers
  },
  email: {
    type: String,
    required: true,
    unique: true, // Also make email unique
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Enforce strong passwords
  },
});

const Buyer = mongoose.model("Buyer", buyerSchema);
module.exports = Buyer;
