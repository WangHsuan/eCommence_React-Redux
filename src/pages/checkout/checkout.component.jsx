import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from 'components/stripe-button/stripe-button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import { Typography } from '@material-ui/core';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>

        <Grid container>
            <Grid item xs={3}>
                <Typography variant='subtitle1'>
                    Product
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='subtitle1'>
                    Description
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='subtitle1'>
                    Quantity
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant='subtitle1'>
                    Price
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant='subtitle1'>
                    Remove
                </Typography>
            </Grid>

        </Grid>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} review={false} />
        ))}
        <div className='total'>Total: ${total}</div>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);