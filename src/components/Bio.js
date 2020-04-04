import React from 'react';
import data from "./../data"; 

// Stateless component
export const Bio = (props) => {

  return ( 
    <section class="fade-in">
      { data.Bio.map((bio, i) => (
          <div class="biografi" key={i}>
            <img src={bio.image} alt={bio.artist} />
            <section>
              <p class="biografi__text"><b>{bio.artist}</b> {bio.desc}</p>
              <a href={`mailto:${bio.email}`}>{bio.email}</a>  
              <p>Hjo</p>
            </section>
          </div>
        )
      )} 
    </section>
  );
};
