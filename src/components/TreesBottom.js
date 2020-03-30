import React, { Component } from 'react';
import data from "./../data"; 

import SimpleReactLightbox from 'simple-react-lightbox'; // Import Simple React Lightbox
import { SRLWrapper } from 'simple-react-lightbox'; // Import SRLWrapper

export class TreesBottom extends Component {
  render() {

    const items = data.TreesBottom.map((tree, i) =>
      <figure key={i}>
        <img src={tree.image} alt={tree.title} />
        <p>{tree.title}</p>
      </figure>
    );

    const options = {
      transitionTimingFunction: "ease",
      slideTransitionSpeed: 1000,
      buttonsIconPadding: "2px",
      enablePanzoom: false,
      hideControlsAfter: 0
    };

    return ( 
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
        <div className="trees-bottom">
          {items}
        </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    );
  }
} 
