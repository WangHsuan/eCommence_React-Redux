import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'

import {
    clearItemFromCart,
    addItem,
    removeItem
} from 'redux/cart/cart.actions';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    checkItem: {
        width: '100%',
        display: 'flex',
        minHeight: '100px',
        borderBottom: '1px solid darkgrey',
        padding: '15px 0',
        fontSize: '20px',
        alignItems: 'center',
        '& .image-container': {
            width: '23%',
            paddingRight: '15px',

            '& img': {
                width: '100%',
                height: '100%',
            }
        },

    },
    quantity: {
        display: 'flex',
        '& .arrow': {
            cursor: 'pointer',
        },
        '&.value': {
            margin: '0 10px',
        }
    },
    removeButton: {
        paddingLeft: '12px',
        cursor: 'pointer',
    }
}))

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, review }) => {
    const classes = useStyles();
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className={classes.checkItem}>
            <Grid container>
                <Grid item xs={3}>
                    <img src={imageUrl} alt='item' style={{ height: '5rem', width: '5rem' }} />
                </Grid>
                <Grid item xs={3}>
                    <span className='name'>{name}</span>
                </Grid>
                <Grid item xs={3}>
                    <span className={classes.quantity}>
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
                    {!review ? <div className={classes.removeButton} onClick={() => clearItem(cartItem)}>
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
