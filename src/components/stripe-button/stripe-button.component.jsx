import React from 'react';
import StripeChekout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IYDRLF7KqzjjW2tU8kvbqog3R7FSOOxJcPgQQdQSayBxxyd88KgszOTswta2HAAP5Wp9wFe44oqkVNJxE9FPqDx00wgZPik22';
    const ontoken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeChekout
            label='Pay Now'
            name='Amir Store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            omount={priceForStripe}
            panelLabel='Pay Now'
            token={ontoken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;