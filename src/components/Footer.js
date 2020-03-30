import React, { Component } from 'react';
import data from "./../data"; 

export class Footer extends Component {
  render() {

    return ( 
      <footer>
        {
          data.Footer.map((footer) => {
            return (
              <div>
              <span>{footer.copyright}</span>
              <span>{footer.email}</span><br />
              <span>{footer.city}</span>
              </div>
            );
          })
        } 
      </footer>
    );
  }
} 
