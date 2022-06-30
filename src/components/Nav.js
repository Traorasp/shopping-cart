import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="Navigation">
      <h1>Fantasyne</h1>
      <div className='nav-links'>
      <Link to="/">Home</Link> 
      <Link to="/shop">Shop</Link> 
      </div>
    </div>
  );
}

export default Nav;
