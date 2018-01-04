import React, { Component } from 'react';
import { item } from './ArtItems';

export class ArtFlow extends Component {
  render() {

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
