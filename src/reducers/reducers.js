import {
  combineReducers
} from 'redux';




const reducer = (state = 0 , action) => {
    switch (action.type) {
        case "ADD":
            return state + 1

        case "REMOVE":
            return state - 1

        default:
            return state
    }
}

const productReducer = (state = {past: [], present: [], future: []}, action) => {
  // console.log(state.present.map( x => x.key  === action.key  ? {...x, amount: x.amount + action.oneLess} : x))
  switch (action.type) {
    case "BUY_PRODUCTS":
    return state.map( x => x.key === action.key ? {...x, amount:x.amount + action.oneLess}  : x)
    case "ADD_TO_STORE":
    console.log(state)
    console.log(action.newProduct)
        return [...state, action.newProduct]
    default:
      return state.present;
  }
}




let rootReducer = combineReducers({
  // items: reducer,
  products: productReducer,
  // newProduct: addProductsReducer,
  //    value: counterReducer,
      // input: adminReducer,
  //    numberOfClicks: clicksReducer
});


export default rootReducer;
