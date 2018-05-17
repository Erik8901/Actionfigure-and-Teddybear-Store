import React, { Component } from 'react';
import Counter from './counter.js';
import SpaItems from './spaItems.js';
import './App.css';
import store from './store/'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store}/>
        <SpaItems store={store} />
      </div>
    );
  }
}

export default App;
