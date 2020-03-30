import React, { Component } from 'react';
import data from "./../data"; 

export class Header extends Component {
  render() {

    return ( 
      <header>
        {
          data.Header.map((header, i) => {
            return (
              <div className="header" key={i}>
                <h1 className="header__title">{header.title}</h1>
                <img className="header__image" src={header.image} alt={header.title} />
                <p className="header__desc">{header.description}</p>
              </div>
            );
          })
        } 
      </header> 
    );
  }
} 
