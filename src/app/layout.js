import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Student Directory",
  description: "Manage student records",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white text-black`}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r shadow-sm p-6">
            <h1 className="text-2xl font-bold mb-8 text-black">
              📘 Student Directory
            </h1>
            <nav className="space-y-4">
              <a
                href="/"
                className="text-black block px-2 py-1 rounded hover:bg-blue-100 transition"
              >
                Home
              </a>
              <a
                href="/students"
                className="text-black block px-2 py-1 rounded hover:bg-blue-100 transition"
              >
                Student List
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
