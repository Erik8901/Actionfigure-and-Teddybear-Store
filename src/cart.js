
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {undoProduct} from "./actions/actions.js"
import {regret} from "./actions/actions.js"
import {redo} from "./actions/actions.js"

class Cart extends Component {

  componentDidUpdate(){
    console.log(this)
    console.log(this.props.addToCart.cartPresentList)
  }

  render(){


        //


        const listCart = this.props.addToCart.cartPresentList.map( (x,index) =>

          (
          <li className="addedProd" key={x.name + x.price + index}>
            <span>X</span>
          <span>{x.name}</span><br/>
          <span>Price: {x.price} kr</span><br/>

          </li>)
        )

        let totalVal =0;
        let totalCost = this.props.addToCart.cartPresentList.map(x => {

            totalVal += Number(x.price)
        })

      this.checkLength = (length) =>{
          if(length>0){
            return true
          }else{
            return false
          }
      }
        return (
      <div id="cart">
        <div>
          <button onClick={e => this.props.dispatch(regret())}>Regret</button>
          <button onClick={e => this.props.dispatch(redo())}>Undo</button>
        </div>
        <h5>Your cart</h5>
        <span>Total products {this.props.addToCart.cartPresentList.length}</span>

        <ul>{listCart}</ul>

        <span>Total cost {totalVal}</span>
      </div>
    )
  }
}



let mapStateToProps = state => {

    return {
      addToCart: state.addToCart,
    }


}


export default connect(mapStateToProps)(Cart)
