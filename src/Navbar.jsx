// Navbar.jsx
// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/characters">Characters</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/episodes">Episodes</Link>
    </nav>
  );
};

export default Navbar;

