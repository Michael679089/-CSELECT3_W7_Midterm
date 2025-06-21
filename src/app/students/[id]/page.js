import pool from "../../../../lib/db.js";

export default async function StudentDetail({ params }) {
  const { id } = params;

  const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
  const student = result.rows[0];

  if (!student) {
    return <h1>Student not found</h1>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{student.name}</h1>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>Course:</strong> {student.course}
      </p>
      <a href="/students">← Back to list</a>
    </main>
  );
}

// Required for SSG (optional if using only SSR)
export async function generateStaticParams() {
  const result = await pool.query("SELECT id FROM students");
  return result.rows.map((row) => ({
    id: row.id.toString(),
  }));
}
