
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {undoProduct} from "./actions/actions.js"
import {regret} from "./actions/actions.js"
import {redo} from "./actions/actions.js"

class Cart extends Component {

  componentDidUpdate(){
    // console.log(this)
    // console.log("PAST CART: ", this.props.addToCart.cartPastList);
    // console.log("PRESENT CART: ", this.props.addToCart.cartPresentList);
    // console.log("FUTURE CART: ", this.props.addToCart.cartFutureList);
    // console.log("HISTORY CART: ", this.props.addToCart.cartHistory);
  }

  render(){


        //

        let cartContent;
        let cartHistoryContent;
        // console.log(this.props.addToCart.cartPresentList.length)
        // console.log("ADDED TO CART: ", this.props.addToCart.cartPresentList.map( (x,index) => x))

        const listCart = this.props.addToCart.cartPresentList.map( (x,index) =>

          (<li className="addedProd" key={x.name + x.price + index}>
          <span>{x.name}</span><br/>
          <span>Price: {x.price} kr</span><br/>

          </li>)
        )


        let totalVal =0;
        let totalCost = this.props.addToCart.cartPresentList.map(x => {

            totalVal += Number(x.price)
        })

            this.checkLength = (length) => {
            if (length > 0) {
              return true
            } else {
              return false
            }
          }

          cartContent = <ul className="boughtItems">{listCart}</ul>
          const listHistoryCart = this.props.addToCart.cartHistory.map( (x,index) =>

            (<li className="history"  key={x + index}>

            <span>{x}</span><br/>


            </li>)

          )
          cartHistoryContent = <nav><ul>{listHistoryCart}</ul></nav>
        return (
      <div id="cart">
        <div>
          <button onClick={e => this.props.dispatch(regret())} disabled={!this.props.actionUndoCart}>Undo</button>
          <button onClick={e => this.props.dispatch(redo())} disabled={!this.props.actionRedoCart}>Redo</button>
        </div>
        <h5>Your cart</h5>
        <span>Total products {this.props.addToCart.cartPresentList.length}</span>

        {cartContent}

        <span>Total cost {totalVal}</span>
          <p>History</p>
          {cartHistoryContent}


      </div>

    )
  }
}



let mapStateToProps = state => {
  // console.log(state.addToCart);
  // console.log(state);
    return {
      addToCart: state.addToCart,
      products: state.products,
      actionUndoCart: state.addToCart.cartPastList.length > 0,
      actionRedoCart: state.addToCart.cartFutureList.length > 0
    }


}


export default connect(mapStateToProps)(Cart)
