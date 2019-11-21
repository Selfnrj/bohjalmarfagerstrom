import React, { Component } from "react";

import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

import { BooksFlow } from './Books';
import './App.css';

class App extends Component {

  state = {
    items: [],
    hasMore: true
  };

  componentDidMount() {
    this.fetchMoreData()
  }

  fetchMoreData = () => {
    axios.get(`./data.json`)
    .then(res => {
      const items = res.data;
      this.setState({ 
        items
      });
    })
    
    if (this.state.items.length >= 5) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="App-title">Bo Hjalmar Fagerström</h1>
          <div className="header">
            <img className="header-image" src="/images/konst/header.jpg" alt="" />
            <p>Tanken på någon är större än någon i sig, även om jag begriper att varat i någon är större än min tanke.</p>
          </div>
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <div>
                <footer>
                  <span>© 2018 Bo Hjalmar Fagerström</span>
                  <span>Email: bohjalmar@hotmail.com</span>
                </footer>
                Hjo.
                <BooksFlow />
              </div>
            }
            >
            <div className="App-flow">
              {this.state.items.map((item, index) => (
                <div key={index}>
                  <img
                    alt={item.title}
                    src={item.image}
                  />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;