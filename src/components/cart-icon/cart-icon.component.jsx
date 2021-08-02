import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import Typography from '@material-ui/core/Typography'
import { useStyles } from 'components/cart-icon/StyledCartIcon';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    const classes = useStyles();
    return (
        <div className={classes.cartIcon} onClick={toggleCartHidden}>
            <ShoppingCartIcon className={classes.shoppingIcon} style={{ fill: '#e8ebe9' }} />

            <Typography className='iconCount' style={{ color: '#000000' }}>{itemCount}</Typography>

        </div>
    );

}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);