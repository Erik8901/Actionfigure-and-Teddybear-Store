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
    type: "ADD_PRODUCTS"
  }
}

let actionCheckAdmin = () => {
    return {
        type: "ADMIN_LOGIN"
    }
}

let actionAddToStore = name => {
    return {
        type: "ADD_TO_STORE",
        name: name
    }
}


export {
  actionAddItem,
  actionRemoveItem,
  actionCheckAdmin,
  actionAddToStore

  };


  

