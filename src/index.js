import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducers.js'

const initialState = {

  admin: {
       loggedInAsAdmin: false,
       adminName: 'admin',
       adminPassword: 'admin'
   },

  products: {

    past: [],

    present:[
      {
      name: "Teddybear Johan",
      price: "99",
      amount: 2,
      key: "Teddybear Johan99",
      bool:false,
    },
    {
      name: "Teddybear Hackerman",
      price: "5",
      amount: 94,
      key: "Teddybear Hackerman5",
      bool:false,

    },
    {
      name: "Teddybear thatzita",
      price: "899",
      amount: 27,
      key: "Teddybear thatzita899",
      bool:false,

    },
    {
      name: "Teddybear Pedro",
      price: "39",
      amount: 9,
      key: "Teddybear Pedro39",
      bool:false,

    },
    {
      name: "Johan ActionMan",
      price: "1999",
      amount: 1,
      key: "Johan ActionMan1999",
      bool:false,

    },
    {
      name: "Transformer Johan",
      price: "7899",
      amount: 37,
      key: "Transformer Johan7899",
      bool:false,

    },
    {
      name: "Transformer Hackerman",
      price: "4",
      amount: 2087,
      key: "Transformer Hackerman4",
      bool:false,

    },
    {
      name: "Dollface",
      price: "199",
      amount: 17,
      key: "Dollface199",
      bool:false,

    }
  ],


  future: [],
},

  addToCart: {

    cartPastList:[],
    cartPresentList:[],
    cartFutureList:[],
    cartHistory:[]
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
