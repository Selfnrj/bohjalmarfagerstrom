import React, { Component } from 'react';
import data from "./../data"; 

import { Gallery } from './Gallery';

export class Sculpture extends Component {  
  render() {

    return ( 
      <div class="fade-in">
        <Gallery name={data.Sculpture} class="art" />
      </div>
    );
  }
} 
