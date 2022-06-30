import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id='home'>
      <h1>Welcome to Fantasyne</h1>
      <h2>About</h2>
      <p>
        Welcome to Fantasyne the only online store to sell and deliver
        fantasy matreials right to your door. We have a multitude of 
        unique and magical materials in stock from mithril to dragon scales.
        Whatever you need we have.
      </p>
      <Link to="/shop">Visit Shop!</Link> 
      <h2>Contact</h2>
      <p>Oznik the Dwarve in Oarth</p>
      <p>Email: fantasyne@AnotherWorld.com</p>
      <p>Phone: 123-456-7891</p>
    </div>
  );
}

export default Home;
