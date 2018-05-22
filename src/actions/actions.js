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

let actionLoginAdmin = (admin) => {
    console.log(admin)
    return {
        type: "ADMIN_LOGIN",
        admin: admin,
        
    }
}
let actionAddToCart = (productKey) => {
  // console.log(productKey)
  console.log("lalla")
  return {
    type: "BUY_PRODUCTS",
    key: productKey,
    oneLess: -1,
  }
}

let addProduct = (name, price, key) => {
  console.log("ofkoksgo")
  return{
    type:"ADD_TO_CART",
    name: name,
    price:price,
    key:key,
  }
}

export {
  actionAddItem,
  actionRemoveItem,
  actionAddToCart,
  addProduct,
  actionLoginAdmin 
 // actionAddToStore,
};
