import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    cartItem: {
        width: '100%',
        display: 'flex',
        height: '80px',
        marginBottom: '15px',
    },
    img: {
        width: '30%'
    },
    itemDetail: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '10px 20px'
    },
    name: {
        fontSize: '16px'
    }


}))

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    const classes = useStyles();
    return (
        <div className={classes.cartItem}>
            <img src={imageUrl} alt='item' className={classes.img} />
            <div className={classes.itemDetail}>
                <span className={classes.name}>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    );
}

export default CartItem;
