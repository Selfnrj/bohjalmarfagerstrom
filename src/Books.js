import React, { Component } from 'react';

export class BooksFlow extends Component {
  render() {

    const item = [
      {
        image: "/images/bok/photo-2.jpg",
        title: "Diktcykel på franska.",
      },
      {
        image: "/images/bok/photo-3.jpg",
        title: "Familjeliv med tennis.",
      },
      {
        image: "/images/bok/photo-1.jpg",
        title: "Skönlitterär åtrå.",
      },
      {
        image: "/images/bok/photo-4.jpg",
        title: "Scenen som skådeplats.",
      }
    ];

    const list = item.map(({ image, title }, i) =>
      <figure key={i}>
        <img src={image} alt={title} />
        <p>{title}</p>
      </figure>
    );

    return (
      <div className="books">
        <p>Böcker</p>
        <main>
          {list}
        </main>
        <img className="bottom" src="/images/bok/photo-5.jpg" alt="" />
      </div>
    );
  }
}
