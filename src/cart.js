
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {regret, redo, decreaseAmount, increaseAmount} from "./actions/actions.js"
import './App.css';
import './ProductsInStore.css'
// import {undoProduct} from "./actions/actions.js"
// import {redo} from "./actions/actions.js"
// import {decreaseAmount} from "./actions/actions.js"
// import {increaseAmount} from "./actions/actions.js"

class Cart extends Component {

  componentDidUpdate(){
    // console.log(this)
    // console.log("PAST CART: ", this.props.addToCart.cartPastList);
    // console.log("PRESENT CART: ", this.props.addToCart.cartPresentList);
    // console.log("FUTURE CART: ", this.props.addToCart.cartFutureList);
    // console.log("HISTORY CART: ", this.props.addToCart.cartHistory);
  }

  render(){
        let cartContent;
        let cartHistoryContent;
        // console.log(this.props.addToCart.cartPresentList.length)
        // console.log("ADDED TO CART: ", this.props.addToCart.cartPresentList.map( (x,index) => x))

        const listCart = this.props.addToCart.cartPresentList.map( (x,index) =>

          (<li className="addedProd" key={x.name + x.price + index}>
          <span>{x.name}</span><br/>
          <span><strong>Price:</strong> {x.price} kr</span><br/>

          </li>)
        )

        let amount;
        let name;
        let price;
        let totalVal =0;
        this.props.addToCart.cartPresentList.forEach(x => {

            totalVal += Number(x.price)
            amount = x.amount;
            name = x.name;
            price = x.price
        })

            this.checkLength = (length) => {
            if (length > 0) {
              return true
            } else {
              return false
            }
          }

          this.regret = (name, price, amount) => {
            this.props.dispatch(decreaseAmount(name + price, amount))
            this.props.dispatch(regret(amount))
          }

          this.undo = (name, price, amount) => {
            this.props.dispatch(increaseAmount(name + price, amount))
            this.props.dispatch(redo())
          }

          cartContent = <ul className="boughtItems">{listCart}</ul>
          const listHistoryCart = this.props.addToCart.cartHistory.map( (x,index) =>
            (<li className="history"  key={x + index}>
            <span>{x}</span><br/>
            </li>)
          )
          cartHistoryContent = <nav><ul className="historyUl">{listHistoryCart}</ul></nav>
        return (
      <div id="cart">

        <p><strong>YOUR CART</strong></p>
        <span><strong>Total products:</strong> {this.props.addToCart.cartPresentList.length}</span>

        {cartContent}

        <span className="costSpan"><strong>Total cost:</strong> {totalVal}kr</span>
        <div>
        <button className="undoRedoBtn" onClick={e => this.regret(name,price, amount)} disabled={!this.props.actionUndoCart}>Undo</button>
        <button className="undoRedoBtn" onClick={e => this.undo(name,price, amount)} disabled={!this.props.actionRedoCart}>Redo</button>
        </div>
          <p className="historyP">History</p>

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
      // products: state.products,
      actionUndoCart: state.addToCart.cartPastList.length > 0,
      actionRedoCart: state.addToCart.cartFutureList.length > 0
    }

}


export default connect(mapStateToProps)(Cart)
