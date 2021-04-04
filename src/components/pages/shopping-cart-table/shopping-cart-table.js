import React from 'react';
import './shopping-cart-table.css';
import {connect} from 'react-redux'
import compose from "../../../utilites/compose";
import {onIncrease, onRemove, onDecrease} from '../../../redux-store/action/action'


const ShoppingCartTable = ({items,total,onIncrease,onDecrease,onRemove}) => {
    if(!items.length)return( <div className="shopping-cart-table"><h2>You order list is empty</h2></div>)

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        {items.map((item,ixd)=>{
          let {id,name,count,total} = item;
          return(
              <tr>
                <td>{ixd+1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm float-right" onClick={()=>onRemove(id)} >
                    <i className="fa fa-trash-o" />
                  </button>
                  <button className="btn btn-outline-success btn-sm float-right"onClick={()=>onIncrease(id)}>
                    <i className="fa fa-plus-circle" />
                  </button>
                  <button className="btn btn-outline-warning btn-sm float-right"onClick={()=>onDecrease(id)}>
                    <i className="fa fa-minus-circle" />
                  </button>
                </td>
              </tr>
          )

        })}
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total price</th>
            <th class="Action">Action</th>
          </tr>
        </thead>

        <tbody>

        </tbody>
      </table>

      <div className="total">
        Total: ${total.total}
      </div>
    </div>
  );
};
let mapStateToProps=({cardtItem,grandTotal})=>{
    return {
        items: cardtItem,
        total: grandTotal
    }
}
/*let mapStateToProps=({cardtItem,orderTotal})=>{
return {
   items: cardtItem,
   total: orderTotal
}
}
let mapDispatchToProps={
        onIncrease:onIncrease,
        onRemove:onRemove,
        onDecrease:onDecrease

}
*/
let mapDispatchToProps={onIncrease, onRemove,onDecrease}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable)


//export default ShoppingCartTable;
