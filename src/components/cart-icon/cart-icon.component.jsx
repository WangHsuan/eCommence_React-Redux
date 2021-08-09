import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import Typography from '@material-ui/core/Typography'
import { useStyles } from 'components/cart-icon/StyledCartIcon';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
    const classes = useStyles();
    return (
        <div className={classes.cartIcon} onClick={toggleCartHidden}>
            <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCartIcon className={classes.shoppingIcon} />
            </Badge>


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