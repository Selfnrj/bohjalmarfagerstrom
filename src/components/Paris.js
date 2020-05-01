import React, { Component } from "react";
import data from "./../data"; 

import { Gallery } from './Gallery';

export class Paris extends Component {
  render() {

    return (
      <main className="fade-in">
        <Gallery name={data.Paris} class="art" />
      </main>
    );
  }
}
