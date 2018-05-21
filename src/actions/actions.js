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

let actionAddToCart = (productKey) => {
  // console.log(productKey)
  return {
    type: "BUY_PRODUCTS",
    key: productKey,
    oneLess: -1,
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


  actionAddToCart

  };
