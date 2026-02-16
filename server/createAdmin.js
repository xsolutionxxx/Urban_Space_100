import bcrypt from 'bcrypt';
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

const login = "admin";
const password = "admin";

const create = async () => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    await pool.query(
        "INSERT INTO admins (login, password_hash) VALUES ($1, $2)",
        [login, hash]
    );
    console.log("Адміна створено!");
    process.exit();
};

create();