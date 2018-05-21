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

let actionAddToCart = () => {
  console.log("hejsan")
  return {
    type: "BUY_PRODUCTS"
  }
}





export {
  actionAddItem,
  actionRemoveItem,
  actionAddToCart
  };
