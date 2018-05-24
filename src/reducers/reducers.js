import {
  combineReducers
} from 'redux';





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

  case "REMOVE_PRODUCT":
  console.log(state)
  console.log(action.removeProduct)
      return {
        past: [...state.past],
        present: [...state.present.filter( x => x.key !== action.removeProduct.key)],
        future: [...state.future]
      }

      case "CHANGE_PRODUCT":
      console.log(state)
      console.log(action.changeProduct)
          return {
            past: [...state.past],
            present: [...state.present],
            future: [...state.future]
          }

  case "DECREASE_AMOUNT":
      return {
          past: [...state.past],
          present: [...state.present.map( x => x.key === action.key ? {...x, amount:x.amount + action.oneUp}  : x)],
          future: [...state.future],
    }

    case "INCREASE_AMOUNT":
        return {
            past: [...state.past],
            present: [...state.present.map( x => x.key === action.key ? {...x, amount:x.amount + action.oneLess}  : x)],
            future: [...state.future],
      }
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
      case "UPDATE_CART":
            return {
              cartPastList:[...state.cartPastList, state.cartPresentList],
              cartPresentList:[...state.cartPresentList, action.ob],
              cartFutureList:[],
              cartHistory: [...state.cartHistory, action.type]
          }
        break;
      case "UNDO_CART":
        const lastPast = state.cartPastList[state.cartPastList.length - 1];
        return {
          cartPastList:state.cartPastList.filter(x => x !== lastPast),
          cartPresentList:lastPast,
          cartFutureList:[state.cartPresentList, ...state.cartFutureList],
          cartHistory: [...state.cartHistory, action.type]
        }
        break;
        case "REDO_CART":
          let firstFuture = state.cartFutureList[0];
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
const adminLoginReducer = (state = {loggedInAsAdmin: false, adminName: 'admin', adminPassword: 'admin'}, action) => {
    let bool = true;
    switch(action.type) {
        case "ADMIN_LOGIN":
            if(action.adminName === state.adminName && action.adminPassword === state.adminPassword) {
                return {
                    loggedInAsAdmin: true,
                    adminName: state.adminName,
                    adminPassword: state.adminName
                }
            } else {
                console.log("Fail")
            }
        default:
            return state
    }
}


let rootReducer = combineReducers({
  products: productReducer,
  addToCart: cartReducer,
  admin: adminLoginReducer
});


export default rootReducer;
