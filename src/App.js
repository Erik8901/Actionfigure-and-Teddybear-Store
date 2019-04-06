import React, { Component } from 'react';
//import Template from './template.js';

import ProductsInStore from './ProductsInStore.js'
import AdminLogin from './adminLogin.js'




import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the actionfigure and teddybear store!</h1>
        <AdminLogin  />
        <ProductsInStore />



      </div>

    );
  }


}
// <Template/>
export default App;
