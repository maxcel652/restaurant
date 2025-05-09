import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  addProduct,
  listProducts,
  removeProduct,
} from "../controllers/productControllers.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();
// Route to create a new product
 productRouter.post("/add", upload.single("image"), adminAuth, addProduct);
 productRouter.get("/list", listProducts);
 productRouter.post("/remove", adminAuth, removeProduct);