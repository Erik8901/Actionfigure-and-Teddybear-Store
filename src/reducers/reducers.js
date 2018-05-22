import {
  combineReducers
} from 'redux';




// const reducer = (state = 0 , action) => {
//     switch (action.type) {
//         case "ADD":
//             return state + 1
//
//         case "REMOVE":
//             return state - 1
//
//         default:
//             return state
//     }
// }

const productReducer = (state = {past: [], present: [], future: []}, action) => {
  switch (action.type) {
    case "BUY_PRODUCTS":
    return {
        past: [...state.past],
      present: [...state.present.map( x => x.key === action.key ? {...x, amount:x.amount + action.oneLess}  : x)],
        future: [...state.future],


  }
    case "ADD_TO_STORE":
    console.log(state)
        return {
          past: [...state.past, state.present],
          present: [...state.present, action.newProduct],
          future: []
        }

    case "UNDO_PRODUCT":
    let lastPast = state.past[state.past.length - 1];

    return {
    past: state.past.filter( x => x !== lastPast ),
    present: lastPast,
    future: [state.present, ...state.future]
  };

case "REDO_PRODUCT":
  let firstFuture = state.future[0];

  return {
    past: [...state.past, state.present],
    present: firstFuture,
    future: state.future.filter(x => x !== firstFuture)
  };

    default:
      return {
        past: [...state.past],
        present: [...state.present],
        future: [...state.future]
      };
  }
}

let cartReducer = (state={cartPastList:[], cartPresentList:{}, cartFutureList:[]}, action) =>{

    switch (action.type) {

      case "UPDATE_CART":
      let ob= action.ob;
      console.log(state)
      let length = state.cartPresentList.length;


          return {
              cartPastList:[...state.cartPastList, state.cartPresentList],
              cartPresentList:[...state.cartPresentList, ob],
              cartFutureList:[]
          }
        break;

      case "UNDO_CART":
      console.log(state)
        const lastPast = state.cartPastList[state.cartPastList.length - 1];
        return {
          cartPastList:state.cartPastList.filter(x => x!== lastPast),
          cartPresentList:lastPast,
          cartFutureList:[state.cartPresentList, ...state.cartFutureList],
        }
        break;

        case "REDO_CART":
          let firstFuture = state.cartFutureList[0];
          console.log(firstFuture)

          return {
            past: [...state.cartPastList, state.cartPresentList],
            present: firstFuture,
            future: state.cartFutureList.filter(x => x !== firstFuture)
          };
      default:
        return state

    }
}



let rootReducer = combineReducers({
  // items: reducer,
  products: productReducer,
  addToCart: cartReducer,
  // newProduct: addProductsReducer,
  //    value: counterReducer,
      // input: adminReducer,
  //    numberOfClicks: clicksReducer
});


export default rootReducer;
