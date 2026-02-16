import express from "express";
import cors from "cors";
import pg from "pg";
import path from "path";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { Pool } = pg;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/assets", express.static(path.join(import.meta.dir, "public/assets")));

/* app.post('/api/auth/login', async (req, res) => {
    const { login, password } = req.body;

    try {
        const result = await pool.query("SELECT * FROM admins WHERE login = $1", [login]);
        if (result.rows.length === 0) return res.status(401).json({message: "Невірний логін"});

        const admin = result.rows[0];

        const validPassword = await bcrypt.compare(password, admin.password_hash);
        if (!validPassword) return res.status(401).json({message: "Невірний пароль"});

        const token = jwt.sign({ id: admin.id, role: 'admin' }, SECRET_KEY, { expiresIn: '24h' });
        
        res.json({ token });
    } catch (e) {
        res.status(500).json({message: "Помилка сервера"});
    }
});

// 2. MIDDLEWARE ЗАХИСТУ (Ставити перед адмінськими роутами)
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.delete('/api/products/:id', authMiddleware, async (req, res) => {
    
}); */

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

/* const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
}); */

pool.query('SELECT NOW()')
  .then(() => console.log("✅ Connected to PostgreSQL successfully"))
  .catch((err) => console.error("❌ Database connection error:", err.stack));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});