import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ProductsInStore.css'
// import { actionAddItem, actionRemoveItem} from './actions/actions.js';

class ProductsInStore extends Component {

  render() {
    console.log(this.props)

    let productStoreContent;
    let pathToPicture = "./img/zombie-3118438_640.png";

    const listOfProducts = this.props.products.map( x => (

      <li className="items" key={x.name}>

      <h3>{x.name}</h3>
      <img className="productImg" src="./img/zombie-3118438_640.png"/>
      <p>Price: {x.price}</p>
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
