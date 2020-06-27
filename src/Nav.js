import React from 'react';
import './App.css';

// to navigate to diff paths using the navbar, rather than using anchor tag that we normally do, 
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
        color:'white'
    }
    return (
    
    <nav>
        <h3>fortnite?</h3>
        <ul className = "nav-links">
            <Link style={navStyle} to = '/about'>
                <li>About</li>
            </Link>
            <Link style={navStyle} to = '/shop'>
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
