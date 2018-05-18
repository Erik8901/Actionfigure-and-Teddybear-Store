let actionAddItem = () => {
        return {
            type: "ADD"
        }
    }
    
let actionRemoveItem = () => {
        return {
            type: "REMOVE"
        }
    }
    
let testBtn = () => {
    return {
        type: "TEST"
    }
}

let getIt = () => {
    return {
        type: "GET"
    }
}

let adminLogin = () => {
    return {
        type: "ADMINLOGIN"
    }
}
    
export { actionAddItem, actionRemoveItem, testBtn, getIt, adminLogin };
  