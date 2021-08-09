import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
        position: 'absolute',
        width: '240px',
        height: '340px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        border: '1px solid #d3d2d4',
        backgroundColor: 'white',
        top: '90px',
        right: '50px',
        zIndex: 5,
        '& .MuiCardContent-root': {
            padding: 0
        }
    },
    cartItems: {
        height: '240px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll'
    },
    emptyMessage: {
        fontSize: '18px',
        margin: '50px auto'
    },
    button: {
        marginTop: 'auto'
    }
});



const CartDropdown = ({ cartItems, history, dispatch }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.cartItems}>

                    {cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : (
                        <span className={classes.emptyMessage}>Your cart is empty</span>
                    )}

                </CardContent>
            </CardActionArea>
            <CardActions>
                <CustomButton
                    onClick={() => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                    }}
                >
                    GO TO CHECKOUT
                </CustomButton>

            </CardActions>
        </Card>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));