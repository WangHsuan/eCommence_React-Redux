import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from 'firebase/firebase.utils';
import CartIcon from 'components/cart-icon/cart-icon.component';
import Typography from '@material-ui/core/Typography';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from 'assets/Gap.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import { selectCurrentUser } from 'redux/user/user.selectors';
import Grid from '@material-ui/core/Grid';


// import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <Grid container className='header' alignItems='center' style={{ height: '5rem', borderBottom: '1px solid #e8e8e8', marginBottom: '20px' }}>
        <Grid item xs={10}>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
        </Grid>
        <Grid item xs={2}>
            <Grid container alignItems='center'>
                <Grid item xs={3}>
                    <Link className='option' to='/shop'>
                        <Typography variant='subtitle1'>
                            Shop
                        </Typography>

                    </Link>
                </Grid>
                <Grid item xs={4}>
                    {currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>
                            <Typography variant='subtitle1'>
                                Sign Out
                            </Typography>
                        </div>
                    ) : (
                        <Link className='option' to='/signin'>
                            <Typography variant='subtitle1'>
                                Sign In
                            </Typography>

                        </Link>
                    )}
                </Grid>
                <Grid item xs={3}>
                    <CartIcon />
                </Grid>

            </Grid>

        </Grid>

        {hidden ? null : <CartDropdown />}
    </Grid>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
