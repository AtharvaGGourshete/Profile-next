import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import font from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper"

export const metadata = {
  title: "First App",
  description: "My Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SessionWrapper>
          <Navbar />
          
          {/* <div className="min-h-[87vh] bg-gray-900 flex inline-flex"></div> */}

          {children}
          
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
