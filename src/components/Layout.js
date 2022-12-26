import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
