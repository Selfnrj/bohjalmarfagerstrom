import React, { Component } from "react";
import data from "./../data"; 

import { Gallery } from './Gallery';
import { Header } from './Header';

export class Home extends Component {
  render() {

    return (
      <main className="fade-in">
        <Header />
        <Gallery name={data.Art} class="art" />
      </main>
    );
  }
}
