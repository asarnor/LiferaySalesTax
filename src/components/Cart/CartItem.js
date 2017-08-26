import React, {PropTypes} from 'react';

const CartItem = ({name, fullPrice, currency}) => {
    return (
        <div className="cart-item">
            <span className="cart-item__name">{name} :
            </span>
            <span className="cart-item__fullPrice">
                <b>$ {fullPrice}</b>
                {currency}
            </span>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    fullPrice: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default CartItem;
