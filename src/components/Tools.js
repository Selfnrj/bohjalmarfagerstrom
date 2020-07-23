import React, { Component } from "react";
import data from "./../data"; 

import { Gallery } from './Gallery';

export class Tools extends Component {
  render() {

    return (
      <main className="fade-in">
        <Gallery name={data.Tools} class="art" />
      </main>
    );
  }
}
