import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducers.js'

const initialState = {
  products: [{
      name: "Teddybear Johan",
      price: "99kr",
      amount: 2
    },
    {
      name: "Teddybear Hackerman",
      price: "5kr",
      amount: 94
    },
    {
      name: "Teddybear thatzita",
      price: "899kr",
      amount: 27
    },
    {
      name: "Teddybear Pedro",
      price: "39kr",
      amount: 9
    },
    {
      name: "Johan ActionMan",
      price: "1999kr",
      amount: 1
    },
    {
      name: "Transformer Johan",
      price: "7899kr",
      amount: 37
    },
    {
      name: "Transformer Hackerman",
      price: "4kr",
      amount: 2087
    },
    {
      name: "Dollface",
      price: "199kr",
      amount: 17
    },
  ],

}

const store = createStore(rootReducer, initialState,
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());


ReactDOM.render((
    <Provider store={store}>
        <App />

    </Provider>
), document.getElementById('root'));
registerServiceWorker();
