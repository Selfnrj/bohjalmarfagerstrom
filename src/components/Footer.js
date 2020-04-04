import React from 'react';
import data from "./../data"; 

// Stateless component
export const Footer = (props) => {
  return ( 
    <footer>
      { data.Footer.map((footer, i) => (
          <div key={i}>{footer.copyright}</div>
        )
      )} 
    </footer>
  );
};
