import React, { Component } from 'react';
import data from "./../data"; 

export class Header extends Component {
  render() {

    return ( 
      <header>
        {
          data.Header.map((header) => {
            return (
              <div className="header">
                <h1 className="App-title">{header.title}</h1>
                <img className="header-image" src={header.image} alt={header.title} />
                <p>{header.description}</p>
              </div>
            );
          })
        } 
      </header> 
    );
  }
} 
