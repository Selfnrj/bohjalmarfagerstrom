import React, { Component } from "react";
import data from "./../data"; 
import { NavLink } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    
    const checkActive = (match, location) => {
      //some additional logic to verify you are in the home URI
      if(!location) return false;
      const {pathname} = location;
      return pathname === "/";
    }

    return ( 
      <nav>
        { data.Header.map((header, i) => (
            <div className="header" key={i}>
              <h1 className="header__title">{header.title}</h1>
              <ul className="navbar">
                <li><NavLink to="/" isActive={checkActive}>Hem</NavLink></li>
                <li><NavLink to="/books">Böcker</NavLink></li>
                {/* <li><NavLink to="/diktsamling">Diktsamling</NavLink></li>
                <li><NavLink to="/biografi">Biografi</NavLink></li> */}
              </ul>
            </div>
          )
        )} 
      </nav> 
    );
  }
}
