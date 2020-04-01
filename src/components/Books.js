import React, { Component } from 'react';
import data from "./../data"; 

import { Gallery } from './Gallery';

export class Books extends Component {  
  render() {

    return ( 
      <div>
        <Gallery name={data.Books} class="books" />
      </div>
    );
  }
} 
