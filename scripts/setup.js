// scripts/setup.js
import dotenv from "dotenv";
dotenv.config(); // Load .env variables early

import pool from "../lib/db.js";

console.log("🔍 DATABASE_URL:", process.env.DATABASE_URL);

async function setup() {
  try {
    // 1. Create the table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        course TEXT NOT NULL
      );
    `);

    // 2. Delete all existing records
    await pool.query(`DELETE FROM students;`);

    // 3. Insert fresh sample records
    await pool.query(`
      INSERT INTO students (name, email, course)
      VALUES
        ('Alice', 'alice@example.com', 'Computer Science'),
        ('Bob', 'bob@example.com', 'Information Technology'),
        ('Charlie', 'charlie@example.com', 'Computer Science'),
        ('Diana', 'diana@example.com', 'Information Systems'),
        ('Eve', 'eve@example.com', 'Computer Science');
    `);

    console.log("✅ Student table reset with sample data");
  } catch (err) {
    console.error("❌ Error during setup:", err);
  } finally {
    process.exit();
  }
}

setup();
