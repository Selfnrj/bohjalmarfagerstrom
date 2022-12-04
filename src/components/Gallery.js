import React, { Component } from 'react';

export class Gallery extends Component {  
  render() {

    return ( 
      <div className={this.props.class}>
        {this.props.children}
          <section>
            { this.props.name.map((gallery, i) => {
              return (
                <article key={i}>
                  <div className="art-content">                    
                    <img src={gallery.image} alt={gallery.title} />
                    <p>{gallery.title}</p>
                  </div>
                </article>
              );
            })}
          </section>
      </div>
    );
  }
} 
