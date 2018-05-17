import {createStore} from 'redux';

const initialState = {
    items: 3,
    newItem: 1
    
}

const reducer = (state = initialState, action) => {
    console.log("reducer going HEJ", action)
    
    switch (action.type) {
        case "Add":
            return Object.assign({},state, { items: state.items + 1});
              
            
        case "remove":
            return Object.assign({},state, { items: state.items - 1});
        default:
            return state
    }
    
    switch (action.type) {
        case "Additem":
            return Object.assign({},state, { newItem: state.newItem + 3});
        default:
            return state
    }
    
}

const store = createStore(reducer);

export default store;