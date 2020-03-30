import React, { Component } from "react";

import { Header } from './components/Header';
import { TreesTop } from './components/TreesTop';
import { ArtFlow } from './components/Art';
import { TreesBottom } from './components/TreesBottom';
import { Books } from './components/Books';
import { Footer } from './components/Footer';

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <TreesTop />
        <ArtFlow />
        <TreesBottom />
        <Books />
        <Footer />
      </div>
    );
  }
}

export default App;