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

let showProducts = () => {
  return {
    type: "SHOW_PRODUCTS"
  }
}

let showLogin = () => {
     
    return {
        type: "SHOW_ADMIN_LOGIN"
    }
}



export {
  actionAddItem,
  actionRemoveItem,
  showLogin
};
