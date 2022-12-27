"use client"
// import "../styles/globals.scss";
import "../output.css";
import NavBar from "../../components/Navbar";
import { useState } from "react";
import Footer from "../../components/Footer";
const THEMES = [
  "light",
  "dark"
]
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme,setTheme] = useState("light");

  return (
    <html lang="en" data-theme={theme}>
      <head />
      <body>
        <NavBar setTheme={setTheme}/>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
