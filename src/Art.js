import React, { Component } from 'react';

export class ArtFlow extends Component {
  render() {

    const item = [
      {
        image: "/images/konst/bild-2.jpg",
        title: "Soleil levant 1994 Soluppgång",
      },
      {
        image: "/images/konst/carré-blanc.jpg",
        title: "Carré blanc 2014",
      },
      {
        image: "/images/konst/biptyque-blanc.jpg",
        title: "Diptyque blanc 2014",
      },
      {
        image: "/images/konst/triptyque-blanc.jpg",
        title: "Triptyque blanc 2014",
      },
      {
        image: "/images/konst/blackout.jpg",
        title: "Blackout 2014",
      },
      {
        image: "/images/konst/bild-6.jpg",
        title: "Franciscus 1994",
      },
      {
        image: "/images/konst/bild-9.jpg",
        title: "Têtes 1970",
      },
    ];

    const list = item.map(({ image, title }, i) =>
      <li key={i}>
        <img src={image} alt={title} />
        <p>{title}</p>
      </li>
    );

    return (
      <ul className="App-flow">
        {list}
      </ul>
    );
  }
}
