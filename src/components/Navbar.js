import React, { useState } from "react"
import { Link } from "gatsby"
import { TfiAlignJustify, TfiClose } from "react-icons/tfi"
import logo from "../assets/images/BLOOMLOGO_crop_white.png"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <header>
      <nav className="wrapper">
        <Link className="nav-logo-wrapper" to="/">
          <img className="nav-logo" src={logo} alt="Bloom Logo"></img>
          <span>Salt Spring Organic B&B at Blue Horse Gallery</span>
        </Link>

        <button
          aria-label="Navigation Menu"
          className="nav-btn"
          onClick={() => {
            setShow(!show)
          }}
        >
          {!show && <TfiAlignJustify size={24} />}
          {show && <TfiClose size={24} />}
        </button>
        <div className={show ? "nav-links-div show-links" : "nav-links-div"}>
          <Link
            to="/orchard"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Suite
          </Link>
          <Link
            to="/availability"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Availability
          </Link>
          <Link
            to="/testimonials"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
