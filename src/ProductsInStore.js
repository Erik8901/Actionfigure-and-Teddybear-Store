import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ProductsInStore.css'
// import { actionAddItem, actionRemoveItem} from './actions/actions.js';

class ProductsInStore extends Component {

  render() {
    console.log(this.props)

    let productStoreContent;


    const listOfProducts = this.props.products.map( x => (

      <li className="items" key={x.name}>

      <h3>{x.name}</h3>
      <img className="productImg"  src={require("./img/zombie.png")}/>
      <p>Price: {x.price}</p><button className="buyItem">Buy</button>
      </li>
    ));


    productStoreContent = <ul className="container">{listOfProducts}</ul>
    return (<div>
      {productStoreContent}

    </div>)
  }
}

let mapStateToProps = state => {
  console.log(state.products)
  return {products: state.products}
}
export default connect(mapStateToProps)(ProductsInStore);
