import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {Fragment} from 'react'
// we recieve in props - grandTotal:{items:0,total:0}
let Header = (props) => {
    let {grandTotal:{total, numberItems:items}} = props;
    let message = (total>0) ?
        (<Fragment>{items} items, total {total}</Fragment>) :
        (<Fragment>Your basket yet</Fragment>);
    let loginning = (props.isAuthentificated)?<div>Logout</div>:<div>login</div>;

    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <div className="leftBar">
            <Link to="/Card">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {message}
                </div>
            </Link>
            <Link to="/Auth">
            <div className="shopping-cart">
                <i className="fas fa-compress-alt"/>
                {loginning}
            </div>
            </Link>
            </div>
        </header>

    )
}

//   {numberItems} items, total {total}
const mapStateToProps = ({grandTotal}) => {
    return {grandTotal}
}

export default connect(mapStateToProps)(Header)
