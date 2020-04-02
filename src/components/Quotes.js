import React, { Component } from 'react';
import data from "./../data"; 

export class Quotes extends Component {  
  render() {

    return ( 
      <div>
        { data.Quotes.map((quote, i) => {
          return (
            <blockquote class="blockquote" key={i}>
              <p>”{quote.text}”</p>
              <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          );
        })}
    </div>
    );
  }
} 
