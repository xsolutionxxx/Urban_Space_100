import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import { sequelize } from "./db/db.js";
import Product from "./models/product-model.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* app.use("/assets", express.static(path.join(import.meta.dir, "public/assets"))); */

/* const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
}); */

/* pool
  .query("SELECT NOW()")
  .then(() => console.log("✅ Connected to PostgreSQL successfully"))
  .catch((err) => console.error("❌ Database connection error:", err.stack)); */

app.get("/api", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const { title, description, price, brand, category, images } = req.body;

    const newProduct = await Product.create({
      title,
      description,
      price,
      brand,
      category,
      images,
    });
    res.json(newProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to Neon PostgreSQL via Sequelize");

    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();
