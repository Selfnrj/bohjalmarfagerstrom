import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Error } from './components/Error';
import { Home } from './components/Home';
import { Books } from './components/Books';

import './App.css';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Navigation />
        <div className="App">
          <Switch>
            <Route path={"/"} component={Home} exact />
            <Route path={"/books"} component={Books} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;