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

let updateCart = (o) =>{
  // console.log(o)
  return {
    type: "UPDATE_CART",
    ob: o,
  }
}
let regret = ()=>{
  return {
    type:"UNDO_CART",
  }
}


let redo = ()=>{
  return {
    type:"REDO_CART",
  }
}

let actionCheckAdmin = () => {
    return {
        type: "ADMIN_LOGIN"
    }
}

let actionAddToStore = (o) => {
  // console.log(o);
    return {
        type: "ADD_TO_STORE",
        newProduct: o
    }
}

let actionUndo = () => {
  return {
    type: "UNDO_PRODUCT"
  }
}

let actionRedo = () => {
  return {
    type: "REDO_PRODUCT"
  }
}

let decreaseAmount = (productKey, amount) => {
  // console.log(amount)
  return {
    type: "DECREASE_AMOUNT",
    key: productKey,
    oneUp: +1
  }
}

let increaseAmount  = (productKey, amount) => {
  // console.log(amount)
  return {
    type: "INCREASE_AMOUNT",
    key: productKey,
    oneLess: -1
  }
}

let actionLoginAdmin = (admin) => {
   // console.log(admin)
    return {
        type: "ADMIN_LOGIN",
        adminName: admin.adminName,
        adminPassword: admin.adminPassword,
        loggedInAsAdmin: admin.loggedInAsAdmin
    }
}

export {
  actionAddItem,
  actionRemoveItem,
  actionCheckAdmin,
  actionAddToStore,
  actionAddToCart,
  actionRedo,
  actionUndo,
  updateCart,
  regret,
  redo,
  decreaseAmount,
  increaseAmount,
  actionLoginAdmin
  };
