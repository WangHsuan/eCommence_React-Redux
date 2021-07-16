import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JDqBvAlCS7eNLzxFLEUsg6Bqo8Ap9pRWpoi35rNsI8ZfNL7KSdIDrDiXlWgNNJbsdPonfsNfzhQ0smVOKYDy6bt00GqxO5gdm';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Gap Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://i.ibb.co/f89xt2j/gap.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
