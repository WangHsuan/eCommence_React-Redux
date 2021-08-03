import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from 'components/stripe-button/stripe-button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import { Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const Review = ({ cartItems, total, info }) => (
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
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>Total: ${total}</div>
        <Grid container style={{ width: '100%', height: '20rem', margin: '15px', backgroundColor: '#f7f7f5', borderRadius: '5px', padding: '10px' }}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    Customer Information
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant='subtitle1'>
                    Customer Name
                </Typography>
            </Grid>

            <Grid item xs={7}>
                <Typography variant='subtitle2'>
                    {info.name}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={4}>
                <Typography variant='subtitle1'>
                    Customer Phone
                </Typography>
            </Grid>
            <Grid item xs={7}>
                <Typography variant='subtitle2'>
                    {info.phone}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={4}>
                <Typography variant='subtitle1'>
                    Customer Address
                </Typography>
            </Grid>
            <Grid item xs={7}>
                <Typography variant='subtitle2'>
                    {info.address}
                </Typography>
            </Grid>
        </Grid>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Review);