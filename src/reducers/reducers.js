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
    console.log(state)
    let lastPast = state.past[state.past.length - 1];
    return {
    past: state.past.filter( x => x !== lastPast ),
    present: lastPast,
    future: [state.present, ...state.future]
  };

    case "REDO_PRODUCT":
    console.log(state)
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

let cartReducer = (state={cartPastList:[], cartPresentList:[], cartFutureList:[], cartHistory:[]}, action) =>{

    switch (action.type) {

    //   case "BUY_PRODUCTS":
    //   return {
    // past: [...state.past, state.present],
    // present: [...state.present, action.newProduct],
    // future: []
    // }



      case "UPDATE_CART":
      // let ob= action.ob;
      // console.log(state.cartPastList.length)
      // console.log(state.cartPresentList.length)
      // console.log(state.cartFutureList.length)
      // console.log(action.type)
      // console.log(state.cartHistory)

      return {
              cartPastList:[...state.cartPastList, state.cartPresentList],
              cartPresentList:[...state.cartPresentList, action.ob],
              cartFutureList:[],
              cartHistory: [...state.cartHistory, action.type]
          }
        break;

        //   case "UNDO_PRODUCT":
        //   let lastPast = state.past[state.past.length - 1];
        //   return {
        //   past: state.past.filter( x => x !== lastPast ),
        //   present: lastPast,
        //   future: [state.present, ...state.future]
        // };

      case "UNDO_CART":
      // console.log(state)
      // console.log(state.cartPastList.length);
      // console.log(state.cartPresentList.length);
      // console.log(state.cartFutureList.length);
        const lastPast = state.cartPastList[state.cartPastList.length - 1];
        return {
          cartPastList:state.cartPastList.filter(x => x !== lastPast),
          cartPresentList:lastPast,
          cartFutureList:[state.cartPresentList, ...state.cartFutureList],
          cartHistory: [...state.cartHistory, action.type]
        }
        break;

        // case "REDO_PRODUCT":
        //   let firstFuture = state.future[0];
        //
        //   return {
        //     past: [...state.past, state.present],
        //     present: firstFuture,
        //     future: state.future.filter(x => x !== firstFuture)
        //   };


        case "REDO_CART":
          console.log(state);
          // console.log(state.cartPastList.length)
          // console.log(state.cartPresentList.length)
          // console.log(state.cartFutureList.length)
          let firstFuture = state.cartFutureList[0];
          // console.log(firstFuture);

          return {
            cartPastList: [...state.cartPastList, state.cartPresentList],
            cartPresentList: firstFuture,
            cartFutureList: state.cartFutureList.filter(x => x !== firstFuture),
            cartHistory: [...state.cartHistory, action.type]
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
