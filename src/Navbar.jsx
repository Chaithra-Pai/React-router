import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <>
      <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/">About Us</NavLink><br/>
      <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/contact">Contact Us</NavLink><br/>
    </>
  )
}

export default Navbar;
