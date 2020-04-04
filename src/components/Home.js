import React, { Component } from "react";
import data from "./../data"; 

import { Gallery } from './Gallery';
import { Header } from './Header';


export class Home extends Component {
  render() {

    return (
      <main className="fade-in">
        <Header />
        <Gallery name={data.TreesTop} class="trees" />
        <Gallery name={data.Art} class="art" />
        <Gallery name={data.TreesBottom} class="trees-bottom" />
        <Gallery name={data.Books} class="books">
          <h2>Böcker</h2>
        </Gallery>
      </main>
    );
  }
}
