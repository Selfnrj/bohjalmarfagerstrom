import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Error } from './components/Error';
import { Home } from './components/Home';
import { Books } from './components/Books';
import { Bio } from './components/Bio';
import { Quotes } from './components/Quotes';

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
            <Route path={"/diktsamling"} component={Quotes} />
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