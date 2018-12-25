import React, { Component, Fragment } from "react";

import axios from 'axios';

import { BooksFlow } from './Books';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    // Sets up our initial state
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      arts: [],
    };

    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        loadUsers,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadUsers();
      }
    };
  }

  componentWillMount() {
    // Loads some users on initial load
    this.loadUsers();
  }

  loadUsers = () => {
    this.setState({ isLoading: true }, () => {
        axios.get('./data.json')
        .then(res => {
          const arts = res.data;
          this.setState({
            hasMore: (this.state.arts.length < 20),
            isLoading: false,
            arts
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            isLoading: false,
           });
        })
    });
  }

  render() {
    const {
      error,
      hasMore,
      isLoading,
      arts,
    } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="App-title">Bo Hjalmar Fagerström</h1>
          <div className="header">
            <img className="header-image" src="/images/konst/header.jpg" alt="" />
            <p>Tanken på någon är större än någon i sig, även om jag begriper att varat i någon är större än min tanke.</p>
          </div>
          <div className="App-flow">
            {/* this.state.arts.map(art => 
              <Fragment key={art.id}>
                <img
                  alt={art.title}
                  src={art.image}
                />
                <p>{art.title}</p>
              </Fragment>
            )*/}
            {arts.map(art => (
            <Fragment key={art.id}>
              <div>
                <img
                  alt={art.title}
                  src={art.image}
                />
                <p>{art.title}</p>
              </div>
            </Fragment>
            ))}
            {error &&
              <div style={{ color: '#900' }}>
                {error}
              </div>
            }
            {isLoading &&
              <div>Loading...</div>
            }
          </div>
          {!hasMore &&
              <div>
                <footer>
                  <span>© 2018 Bo Hjalmar Fagerström</span>
                  <span>Email: bohjalmar@hotmail.com</span>
                </footer>
                Hjo.
                <BooksFlow />
              </div>
            }
        </div>
      </div>
    );
  }
}

export default App;