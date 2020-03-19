import React, { Component, Fragment } from "react";

import axios from 'axios';
import SimpleReactLightbox from 'simple-react-lightbox'; // Import Simple React Lightbox
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper

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

    const options = {
      transitionTimingFunction: "ease",
      slideTransitionSpeed: 1000,
      buttonsIconPadding: "2px",
      enablePanzoom: false,
      hideControlsAfter: 0
    };

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
            <picture>
              <source className="header-image" srcset="images/konst/header.webp" type="image/webp" />
              <source className="header-image" srcset="images/konst/header.jpg" type="image/jpeg" /> 
              <img className="header-image" src="images/konst/header.jpg" alt="Alt Text!" />
            </picture>
            <p>Tanken på någon är större än någon i sig, även om jag begriper att varat i någon är större än min tanke.</p>
          </div>
          <div className="trees">
            <figure>
              <img className="header-image" src="images/konst/bild-29.jpg" alt="Alt Text!" />
              <p></p>
            </figure>
            <figure>
              <img className="header-image" src="images/konst/bild-31.jpg" alt="Alt Text!" />
              <p></p>
            </figure>
            <figure>
              <img className="header-image" src="images/konst/bild-30.jpg" alt="Alt Text!" />
              <p></p>
            </figure>   
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
            <SimpleReactLightbox>
            <SRLWrapper options={options}>
            {arts.map(art => (
              <Fragment key={art.id}>
                <div className="art-image">
                  <picture>
                    <img src={art.image + ".jpg"} alt={art.title} />
                  </picture>
                  <p>{art.title}</p>
                </div>
              </Fragment>
            ))}
            </SRLWrapper>
            </SimpleReactLightbox>

            {error &&
              <div style={{ color: '#900' }}>
                {error}
              </div>
            }
            {isLoading && <div>Loading...</div>}
            {!hasMore && <div></div> }
          </div>
          <div>
            <BooksFlow />
            <footer>
              <span>© 2020 Bo Hjalmar Fagerström</span>
              <span>Email: bohjalmar@hotmail.com</span><br />
              <span>Hjo.</span>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;