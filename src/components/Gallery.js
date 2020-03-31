import React, { Component } from 'react';

import SimpleReactLightbox from 'simple-react-lightbox'; // Import Simple React Lightbox
import { SRLWrapper } from 'simple-react-lightbox'; // Import SRLWrapper

export class Gallery extends Component {  
  render() {

    const options = {
      transitionTimingFunction: "ease",
      slideTransitionSpeed: 1000,
      buttonsIconPadding: "2px",
      enablePanzoom: false,
      hideControlsAfter: 0
    };

    return ( 
      <div className={this.props.class}>
        {this.props.children}
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <section>
              { this.props.name.map((gallery, i) => {
                return (
                  <figure key={i}>
                    <img src={gallery.image} alt={gallery.title} />
                    <p>{gallery.title}</p>
                  </figure>
                );
              })}
            </section>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    );
  }
} 
