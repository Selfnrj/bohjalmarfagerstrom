import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Error } from './components/Error';
import { Aterblick } from './components/Aterblick';
import { Paris } from './components/Paris';
import { Books } from './components/Books';
import { Sculpture } from './components/Sculpture';
import { Bio } from './components/Bio';
import { Arboretum } from './components/Arboretum';

import './App.css';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path={"/"} component={Bio} exact />
            <Route path={"/aterblick"} component={Aterblick} />
            <Route path={"/paristiden"} component={Paris} />
            <Route path={"/arboretum"} component={Arboretum} />
            <Route path={"/skulpturer"} component={Sculpture} />
            <Route path={"/bocker"} component={Books} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;