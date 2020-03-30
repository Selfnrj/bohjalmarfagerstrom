import React, { Component } from 'react';
import data from "./../data"; 

import SimpleReactLightbox from 'simple-react-lightbox'; // Import Simple React Lightbox
import { SRLWrapper } from 'simple-react-lightbox'; // Import SRLWrapper

export class ArtFlow extends Component {
  render() {

    const items = data.Art.map((art, i) =>
      <div className="art-image" key={i}>
        <img src={art.image} alt={art.title} />
        <p>{art.title}</p>
      </div>
    );

    const options = {
      transitionTimingFunction: "ease",
      slideTransitionSpeed: 1000,
      buttonsIconPadding: "2px",
      enablePanzoom: false,
      hideControlsAfter: 0
    };

    return ( 
      <div className="App-flow">
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            {items}
          </SRLWrapper>
        </SimpleReactLightbox>
      </div> 
    );
  }
} 
