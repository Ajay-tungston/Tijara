const Product=require("../../models/Products")
const userModels= require("../../utils/userModals")
const path = require("path");
const jwt=require("jsonwebtoken")
const addProduct = async (req, res, next) => {
    try {
      const {
        itemCategory,
        itemName,
        itemSubCategory,
        country,
        description,
        availableKg,
        priceAED,
        priceINR,
        priceUSD,
      } = req.body;
  
      // Check if images are uploaded
      if (!req.files || req.files.length < 1) {
        return res.status(400).json({ message: "At least one image is required." });
      }
  
      const baseUrl = `${req.protocol}://${req.get('host')}`;

    const imagePaths = req.files.map(file => `${baseUrl}/uploads/${file.filename}`);
  
      // Prepare price data
      const pricePerKg = {
        ...(priceAED && { AED: parseFloat(priceAED) }),
        ...(priceINR && { INR: parseFloat(priceINR) }),
        ...(priceUSD && { USD: parseFloat(priceUSD) }),
      };
  
 
      const { id, role } = req.user;
  
    
      const userModel = userModels[role];
      if (!userModel) {
        return res.status(403).json({ message: "Invalid user role." });
      }
  
      // Find the user by their ID to ensure they exist
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      // Create the new product
      const newProduct = new Product({
        itemCategory: itemCategory.toLowerCase(),
        itemName,
        itemSubCategory: String(itemSubCategory).toLowerCase(),
        country,
        availableKg: parseFloat(availableKg),
        description,
        images: imagePaths,
        pricePerKg,
        addedBy: id, // Set the logged-in user's ID
        addedByModel: role.charAt(0).toUpperCase() + role.slice(1), // Capitalize the role (e.g., "admin" -> "Admin")
      });
  
      await newProduct.save();
  
      res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      next(error); // Pass the error to the global error handler (if any)
    }
  };
  
  //View all products
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// View single product
const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

// Update product
const updateProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const {
        itemCategory,
        itemName,
        itemSubCategory,
        country,
        availableKg,
        description,
        priceAED,
        priceINR,
        priceUSD,
      } = req.body;
  
      const pricePerKg = {
        ...(priceAED && { AED: parseFloat(priceAED) }),
        ...(priceINR && { INR: parseFloat(priceINR) }),
        ...(priceUSD && { USD: parseFloat(priceUSD) }),
      };
  
      const baseUrl = `${req.protocol}://${req.get("host")}`;
      let newImagePaths = [];
  
      if (req.files && req.files.length > 0) {
        newImagePaths = req.files.map(file => `${baseUrl}/product-images/${file.filename}`);
      }
  
      // Find the product
      const product = await Product.findById(id);
      if (!product) return res.status(404).json({ message: "Product not found" });
  
      // Optionally: merge old and new images or replace them
      const finalImages = newImagePaths.length > 0 ? newImagePaths : product.images;
  
      product.itemCategory = itemCategory || product.itemCategory;
      product.itemName = itemName || product.itemName;
      product.itemSubCategory = itemSubCategory || product.itemSubCategory;
      product.country = country || product.country;
      product.availableKg = availableKg || product.availableKg;
      product.description = description || product.description;
      product.pricePerKg = Object.keys(pricePerKg).length ? pricePerKg : product.pricePerKg;
      product.images = finalImages;
  
      await product.save();
  
      res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
      next(error);
    }
  };
// Delete product
const deleteProduct = async (req, res, next) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    next(error);
  }
};

  
  module.exports={addProduct,deleteProduct,getAllProducts,getProductById,updateProduct}