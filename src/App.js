import React, { Component } from 'react';
import Template from './template.js';
import ProductsInStore from './ProductsInStore.js'

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <ProductsInStore />
      </div>
    );
  }
}
// <Template/>
export default App;
