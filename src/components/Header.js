import React, { Component } from "react";
import data from "./../data"; 

export class Header extends Component {
  render() {

    return ( 
      <header>
        { data.Header.map((header, i) => (
            <div className="header" key={i}>
              <img className="header__image" src={header.image} alt={header.title} />
              <p className="header__desc">{header.description}</p>
            </div>
          )
        )} 
      </header> 
    );
  }
}
