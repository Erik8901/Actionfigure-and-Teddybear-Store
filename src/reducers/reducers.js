import { combineReducers } from 'redux';



const reducer = (state = 0 , action) => {
    console.log("reducer going HEJ", action)
    
    switch (action.type) {
        case "ADD":
            return state + 1
              
        case "REMOVE":
            return state - 1
            
        case "TEST":
            console.log("hej")
            return state
            
        case "ADMINLOGIN":
            console.log("admin")
            
            return state 
        
        default:
            return state
    }
    
   
    
}

let rootReducer = combineReducers({
    items: reducer
//    value: counterReducer,
//    animals: animalReducer,
//    numberOfClicks: clicksReducer
});


export default rootReducer;