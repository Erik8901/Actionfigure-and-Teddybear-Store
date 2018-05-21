import {
  combineReducers
} from 'redux';




const reducer = (state = 0 , action) => {
    console.log("reducer going HEJ", action)
    
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
  switch (action.type) {
    case "ADD_PRODUCTS":
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
