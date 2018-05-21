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





export {
  actionAddItem,
  actionRemoveItem,
  actionAddToCart
  };
