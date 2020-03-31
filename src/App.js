import React, { Component } from "react";
import data from "./data"; 

import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Gallery name={data.TreesTop} class="trees" />
        <Gallery name={data.Art} class="art" />
        <Gallery name={data.TreesBottom} class="trees-bottom" />
        <Gallery name={data.Books} class="books">
          <h2>Böcker</h2>
        </Gallery>
        <Footer />
      </div>
    );
  }
}

export default App;