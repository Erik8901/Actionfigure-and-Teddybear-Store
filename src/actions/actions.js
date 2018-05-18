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



export {
  actionAddItem,
  actionRemoveItem
};
