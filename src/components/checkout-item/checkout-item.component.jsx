import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'

import {
    clearItemFromCart,
    addItem,
    removeItem
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, review }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <Grid container>
                <Grid item xs={3}>
                    <img src={imageUrl} alt='item' style={{ height: '5rem', width: '5rem' }} />
                </Grid>
                <Grid item xs={3}>
                    <span className='name'>{name}</span>
                </Grid>
                <Grid item xs={3}>
                    <span className='quantity'>
                        {!review ? <div className='arrow' onClick={() => removeItem(cartItem)}>
                            &#10094;
                        </div> : null}

                        <span className='value'>{quantity}</span>
                        {!review ? <div className='arrow' onClick={() => addItem(cartItem)}>
                            &#10095;
                        </div> : null}

                    </span>
                </Grid>
                <Grid item xs={2}>
                    <span className='price'>{price}</span>
                </Grid>
                <Grid item xs={1}>
                    {!review ? <div className='remove-button' onClick={() => clearItem(cartItem)}>
                        &#10005;
                    </div> : null}
                </Grid>
            </Grid>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
