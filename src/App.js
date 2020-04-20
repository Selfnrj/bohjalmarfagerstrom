import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Error } from './components/Error';
import { Home } from './components/Home';
import { Books } from './components/Books';
import { Sculpture } from './components/Sculpture';
import { Bio } from './components/Bio';

import './App.css';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path={"/"} component={Home} exact />
            <Route path={"/skulpturer"} component={Sculpture} />
            <Route path={"/bocker"} component={Books} />
            <Route path={"/biografi"} component={Bio} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;