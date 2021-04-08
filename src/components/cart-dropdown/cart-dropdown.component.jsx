import React from 'react';

import CustomBoutton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomBoutton>GO CHECKOUT</CustomBoutton>
    </div>
);

export default CartDropdown;