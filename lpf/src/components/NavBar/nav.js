import React from 'react';
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
function navbar() {
  return (
    <div className="navbar">
      <div className="navbar container container">
        <Link to='/' className="navbar-logo">
          <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/static/shopify-favicon.png"/>
          Shopify
        </Link>
        <div className="menu-icon">

        </div>
      </div>
      
    </div>
  );
}
export default navbar;