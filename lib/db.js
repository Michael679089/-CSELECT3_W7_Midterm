// lib/db.js
import dotenv from "dotenv";
dotenv.config(); // ✅ load .env

import pkg from "pg";
const { Pool } = pkg;

console.log("🔍 DATABASE_URL from db.js:", process.env.DATABASE_URL); // should NOT be undefined

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
