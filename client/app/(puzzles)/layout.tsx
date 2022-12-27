"use client"
// import "../styles/globals.scss";
import "../output.css";
import { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Drawer from "../../components/Drawer";
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
          <Drawer setTheme={setTheme}>
            {children}
          </Drawer>
        <Footer></Footer>
        </body>
    </html>
  )
}
