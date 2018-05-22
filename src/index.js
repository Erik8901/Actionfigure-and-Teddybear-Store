import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducers.js'

const initialState = {


  products: {

    past: [],

    present:[
      {
      name: "Teddybear Johan",
      price: "99kr",
      amount: 2,
      key: "Teddybear Johan99kr"
    },
    {
      name: "Teddybear Hackerman",
      price: "5kr",
      amount: 94,
      key: "Teddybear Hackerman5kr"
    },
    {
      name: "Teddybear thatzita",
      price: "899kr",
      amount: 27,
      key: "Teddybear thatzita899kr"
    },
    {
      name: "Teddybear Pedro",
      price: "39kr",
      amount: 9,
      key: "Teddybear Pedro39kr"
    },
    {
      name: "Johan ActionMan",
      price: "1999kr",
      amount: 1,
      key: "Johan ActionMan1999kr"
    },
    {
      name: "Transformer Johan",
      price: "7899kr",
      amount: 37,
      key: "Transformer Johan7899kr"
    },
    {
      name: "Transformer Hackerman",
      price: "4kr",
      amount: 2087,
      key: "Transformer Hackerman4kr"
    },
    {
      name: "Dollface",
      price: "199kr",
      amount: 17,
      key: "Dollface199kr"
    }
  ],

  future: [],
}
}

const store = createStore(rootReducer, initialState,
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());


ReactDOM.render((
    <Provider store={store}>
        <App />

    </Provider>
), document.getElementById('root'));
registerServiceWorker();
