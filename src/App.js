import React, { Component } from 'react';
import Template from './template.js';
import AdminLogin from './adminLogin.js'

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Template/>
            <div className="test">
                <AdminLogin/>
            </div>
      </div>
    );
  }
}

export default App;
