import React, {PropTypes} from 'react';
import CartItem from './CartItem';
const formatCurrency = require('format-currency')

const Cart = ({items, total, currency, taxes}) => {
    return (
        <div>
            <h3>Shopping Cart</h3>
            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <ul>
                                {items.map(item => (
                                    <li key={item.id}>
                                        <CartItem {...item}/>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__taxes">Sales Tax: ${ formatCurrency(taxes) } {currency}</div>
                        <div className="cart__taxes">Total: $<b>{ formatCurrency(total) }</b>
                        {currency}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    taxes: PropTypes.number
}

export default Cart;
