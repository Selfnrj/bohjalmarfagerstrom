import React, { Component } from 'react';

import SimpleReactLightbox from 'simple-react-lightbox'; // Import Simple React Lightbox
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper

export class BooksFlow extends Component {
  render() {

    const item = [
      {
        image: "images/bok/photo-2.jpg",
        title: "Diktcykel på franska.",
      },
      {
        image: "images/bok/photo-3.jpg",
        title: "Ambjörn (13år) tennisspelare",
      },
      {
        image: "images/bok/photo-1.jpg",
        title: "Skönlitterär åtrå.",
      },
      {
        image: "images/bok/photo-4.jpg",
        title: "Scenen som skådeplats.",
      }
    ];

    const list = item.map(({ image, title }, i) =>
      <figure key={i}>
        <img src={image} alt={title} />
        <p>{title}</p>
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
        <p>Böcker</p>
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            {list}
          </SRLWrapper>
        </SimpleReactLightbox>
        <img className="bottom" src="images/bok/photo-5.jpg" alt="" />
      </div>
    );
  }
}
