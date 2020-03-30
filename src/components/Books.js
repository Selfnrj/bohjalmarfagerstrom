import React, { Component } from 'react';
import data from "./../data"; 

import SimpleReactLightbox from 'simple-react-lightbox'; // Import Simple React Lightbox
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper

export class Books extends Component {
  render() {

    const items = data.Books.map((book, i) =>
      <figure key={i}>
        <img src={book.image} alt={book.title} />
        <p>{book.title}</p>
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
      <div className="books">
        <h2>Böcker</h2>
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            {items}
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    );
  }
}
