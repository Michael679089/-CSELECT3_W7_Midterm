"use client";
import { useEffect, useState } from "react";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then(setStudents)
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>📋 Student List</h1>
      <table>
        <thead>
          <tr className="outline outline-red-500">
            <th> Name </th>
            <th> Email </th>
            <th> Course </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="outline outline-blue-500">
                <a href={`/students/${student.id}`}>{student.name}</a>
              </td>
              <td>{student.email}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
