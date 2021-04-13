import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCartTotal } from '../../redux/cart/cart.selector';
import ChekoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>price</span>
            </div>
            <div className='header-block'>
                <span>remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <ChekoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>
            <span>TOTAL:${total}</span>
        </div>
        <div className='test-warning'>
            *Plese use the following test credit card for payments*
            <br />
            4242 4242 4242 4242-exp:01/20 -ccv:123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);