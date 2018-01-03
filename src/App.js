import React, { Component } from 'react';
import { ArtFlow } from './Art';
import { BooksFlow } from './Books';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="App-title">Bo Hjalmar Fagerström</h1>
          <img className="bottom" src="/images/konst/header.jpg" alt="" />
          <p>Tanken på någon är större än någon i sig, även om jag begriper att varat i någon är större än min tanke.</p>
          <ArtFlow />
          <footer>
            <span>© 2018 Bo Hjalmar Fagerström</span>
            <span>Email: bohjalmar@hotmail.com</span>
          </footer>
          Hjo.
          <BooksFlow />
        </div>
      </div>
    );
  }
}

export default App;
