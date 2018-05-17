import React from 'react';
import { connect } from 'react-redux';



function SpaItems(props) {
    console.log("renderItems is going")
    
    return (
        <div>
            <h2>This wil display the store items:</h2>
                <ul>Items:</ul>
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                     <li>newItem: {props.newItem}</li>
                    <button onClick={props.onClickAddItem}>Add new Item to Store</button>
        </div>
    
    )
}

function mapStateToProps(state) {
    console.log("mapigenHEJ")
    return {
        newItem: state.newItem
    }
}

function tjena(dispatch) {
   
    return {
        onClickAddItem: () => {
            console.log("knappenkanfunkas")
            const action = { type: 'AddItem'};
            dispatch(action)
        
        
        }
    }
}


export default connect(mapStateToProps,tjena) (SpaItems);