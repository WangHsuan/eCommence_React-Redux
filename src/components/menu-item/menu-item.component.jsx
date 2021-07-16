import React from 'react';
import { withRouter } from 'react-router-dom';
//material ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from 'components/menu-item/StyledMenuItem'




const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    const classes = useStyles();
    return (
        <div
            className={`${classes.menuItem}  ${size}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <Grid container className={classes.content}>
                <Grid item >
                    <Typography variant='body1'>{title.toUpperCase()}</Typography>
                </Grid>
                {/* <Grid item>Shop Now</Grid> */}
            </Grid>
        </div>
    );
}

export default withRouter(MenuItem);