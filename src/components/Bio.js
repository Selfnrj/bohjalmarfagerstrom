import React from 'react';
import data from "./../data"; 

// Stateless component
export const Bio = (props) => {

  return ( 
    <section className="fade-in">
      { data.Bio.map((bio, i) => (
          <div className="biografi" key={i}>
            <div className="biografi__image">
              <img src={bio.image} alt={bio.artist} />
            </div>
            <section>
              <p className="biografi__text lead"><b>{bio.artist}</b> {bio.desc}</p>
              <a href={`mailto:${bio.email}`}>{bio.email}</a>  
            </section>
          </div>
        )
      )} 
    </section>
  );
};
