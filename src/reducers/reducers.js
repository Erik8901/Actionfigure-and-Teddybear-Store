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

const productReducer = (state = [], action) => {
  console.log("productReducer: ", action);
  console.log(action.type)

  switch (action.type) {
    case "BUY_PRODUCTS":

    return state.map( x => x.key === action.key ? {...x, amount: x.amount + action.oneLess} : x)

    default:
      return state;
  }
}

const adminReducer = (state = '',action) => {
    switch (action.type) {
        case "ADMIN_LOGIN":
            return state

        default :
            return state
    }
}

const addReducer = (state = {},action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case "ADD_TO_STORE":
            return state

        default:
            return state
    }
}


const listOfAddedProductsReducer = (state = {
  listOfAddedProductsPast:[],
  AddedProductsPresent:{},
  listOfAddedProductsFuture: [],
  listOfAddedProducts:[]

}, action) => {
    // {...x, b: [...x.b] }
    // [...state, {name: action.name, price: action.price, key:action.key}]
    console.log(state)
    switch (action.type) {
      case "ADD_TO_CART":

          // return  [...state, {name: action.name, price: action.price, key:action.key}]
            return state
        break;
      default:
        return state

    }

}


// const pastPresentFutureReducer = (state = {listOfAddedProductsPast:[],AddedProductsPresent:{},listOfAddedProductsFuture:[], listOfAddedProducts:[]}, action) => {
//   // console.log({...state.AddedProductsPresent, {name:action.name}})
//
//   //{...x, b: [...x.b] };
//   console.log(state)
//
//     switch (action.type) {
//       case "ADD_TO_PRESENT":
//
//
//             if(state.AddedProductsPresent.name === undefined ){
//               console.log("state i undefined ", state)
//
//               return  {
//                 listOfAddedProductsPast:[],
//                 AddedProductsPresent : {...state.AddedProductsPresent, name:action.name, price:action.price},
//                 listOfAddedProductsFuture:[]
//               }
//
//             }else{
//               console.log("state när present har ett värde ", state)
//
//               return  {
//                 listOfAddedProductsPast:[...state.listOfAddedProductsPast, state.AddedProductsPresent],
//                 AddedProductsPresent : {...state.AddedProductsPresent, name:action.name, price:action.price},
//                 listOfAddedProductsFuture:[]
//               }
//             }
//
//
//         break;
//       case "UNDO_PRODUCT":
//       console.log(action.type)
//         console.log(state.listOfAddedProductsPast.length)
//
//           if(state.listOfAddedProducts.length ===0){
//
//             return state
//
//           }else{
//             const lastPast = state.listOfAddedProductsPast[state.listOfAddedProductsPast.length - 1];
//             return {
//             		listOfAddedProductsPast: state.listOfAddedProductsPast.filter(x => x!== lastPast),
//             		AddedProductsPresent: lastPast,
//             		listOfAddedProductsFuture: [state.AddedProductsPresent, ...state.listOfAddedProductsFuture]
// 	             };
//
//           }
//
//
//       default:
//         return state
//     }
//
// }

let rootReducer = combineReducers({
  // items: reducer,
  products: productReducer,
  pastPresentFuture:{
    listOfAddedProducts: listOfAddedProductsReducer,

  }


});


export default rootReducer;
