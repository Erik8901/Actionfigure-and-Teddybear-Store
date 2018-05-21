
import React, {Component} from 'react';
import {connect} from 'react-redux';


class Cart extends Component {



  render(){



        //
        const listCart = this.props.listOfAddedProducts.map( (x,index) =>
          (

          <li className="addedProd" key={x.name + x.price + index}>
            <span>X</span>
          <span>{x.name}</span><br/>
          <span>Price: {x.price} kr</span><br/>

          </li>)
        )

        let totalVal =0;

        let totalCost = this.props.listOfAddedProducts.map(x => {

            totalVal += Number(x.price)
        })

        console.log(totalVal);
    return (
      <div id="cart">

        <h5>Your cart</h5>
        <span>Total products {this.props.listOfAddedProducts.length}</span>

        <ul>{listCart}</ul>

        <span>Total cost {totalVal}</span>
      </div>
    )
  }
}

let mapStateToProps = state => {
  // console.log(state.products)
  // console.log(state.products.amount)
  return {
    totalAdded: state.totalAdded,
    listOfAddedProducts: state.listOfAddedProducts,
  // amount: state.products.amount
  }
}


export default connect(mapStateToProps)(Cart)
