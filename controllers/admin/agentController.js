// controllers/admin/agentController.js
const Agent = require("../../models/Agent");

const addAgent = async (req, res) => {
  try {
    const { agentName, email, phone, address } = req.body;

    if (!agentName || !email || !phone || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await Agent.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return res.status(409).json({ message: "Agent with this email or phone already exists" });
    }

    const newAgent = new Agent({ agentName, email, phone, address });
    await newAgent.save();

    res.status(201).json({ message: "Agent added successfully", agent: newAgent });
  } catch (error) {
    console.error("Error adding agent:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addAgent };
