import React, { Component } from 'react';
import data from "./../data"; 

import { Gallery } from './Gallery';

export class Arboretum extends Component {  
  render() {

    return ( 
      <div class="fade-in">
        <Gallery name={data.TreesTop} class="trees" />
        <Gallery name={data.Trees} class="art" />
        <Gallery name={data.TreesBottom} class="trees-bottom" />
      </div>
    );
  }
} 
