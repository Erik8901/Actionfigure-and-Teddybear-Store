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
    },
    {
      name: "Teddybear Hackerman",
      price: "5kr",
    },
    {
      name: "Teddybear thatzita",
      price: "899kr",
    },
    {
      name: "Teddybear Pedro",
      price: "39kr",
    },
    {
      name: "Johan ActionMan",
      price: "1999kr",
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
