import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
           <header>
           <div className="logo">
      ---- Logo Goes Here ----
            </div>
            <nav>
    <li ClassName="first">
    <Link to="/"> Home </Link>
    </li>
    <li>
    <Link to="/Login"> Login </Link>
    </li>
    <li>
    <Link to="/DataEntry"> Data Entry </Link>
    </li>
    <li ClassName = "last">
    <Link to="/Stats"> Individual Stats </Link>
    </li>
    </nav>
      </header>
      
      
    );
  }
}

export default Header;