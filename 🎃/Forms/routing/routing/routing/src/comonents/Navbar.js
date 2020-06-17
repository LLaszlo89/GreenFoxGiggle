import React from "react";
import { Link , NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav>
    <div className="container">
    <a className="brand-logo"> Poke Times</a>
      <ul className="right">
      <li><NavLink to="/Home">Home</NavLink></li>
       <li><NavLink to="/Contact">Contact</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;