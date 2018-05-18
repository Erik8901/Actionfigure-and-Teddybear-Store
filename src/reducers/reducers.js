import {
  combineReducers
} from 'redux';



const reducer = (state = 0, action) => {

  switch (action.type) {
    case "ADD":
      return state + 1

    case "REMOVE":
      return state - 1

    default:
      return state
  }
}

const productReducer = (state = {
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
}, action) => {
  console.log("productReducer: ", action);
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return {
        ...state,

      }
    default:
      return state;
  }
}


let rootReducer = combineReducers({
  // items: reducer,
  products: productReducer,
  //    value: counterReducer,
  //    animals: animalReducer,
  //    numberOfClicks: clicksReducer
});


export default rootReducer;
