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
  // console.log(state.present.map( x => x.key  === action.key  ? {...x, amount: x.amount + action.oneLess} : x))
  // console.log(state.present.map( x => x.key))
  switch (action.type) {
    case "BUY_PRODUCTS":
    console.log(action.type)
    console.log(state)
    return {
        past: [...state.past],
      present: [...state.present.map( x => x.key === action.key ? {...x, amount:x.amount + action.oneLess}  : x)],
        future: [...state.future],


  }
    case "ADD_TO_STORE":
    console.log(action.type)
    console.log(state)
    console.log(state.past)
    console.log(state.present)
    console.log(state.future)
    console.log([...state.present, action.newProduct])
        return {
          past: [...state.past, state.present],
          present: [...state.present, action.newProduct],
          future: []
        }

    case "UNDO_PRODUCT":
    console.log(state)
    console.log(state.past)
    let lastPast = state.past[state.past.length - 1];
    console.log(lastPast)

    return {
    past: state.past.filter( x => x !== lastPast ),
    present: lastPast,
    future: [state.present, ...state.future]
  };

case "REDO_PRODUCT":
console.log(state.future)
console.log(state.future[0])
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




let rootReducer = combineReducers({
  // items: reducer,
  products: productReducer,
  // newProduct: addProductsReducer,
  //    value: counterReducer,
      // input: adminReducer,
  //    numberOfClicks: clicksReducer
});


export default rootReducer;
