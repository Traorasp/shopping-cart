import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="Navigation">
      <h1>Fantasyne</h1>
      <Link to="/">Home</Link> |{" "}
      <Link to="/shop">Shop</Link> |{" "}
    </div>
  );
}

export default Nav;
