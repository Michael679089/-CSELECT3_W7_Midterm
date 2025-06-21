import pool from "../../../../lib/db.js"; // for `route.js` (adjust depth)

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM students ORDER BY id ASC");
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("DB Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
