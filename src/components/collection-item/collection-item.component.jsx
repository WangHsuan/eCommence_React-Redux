import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { useStyles } from 'components/collection-item/StyledCollection';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'



const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title="title"
                />

                <CardContent>
                    <Grid container justifyContent='space-between' alignItems='flex-start'>
                        <Grid item xs={8}>
                            <Typography variant="body2" >
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body2" color="textSecondary" >
                                {price}$
                            </Typography>
                        </Grid>
                    </Grid>


                </CardContent>


            </CardActionArea>
            <CardActions className={classes.customButton}>
                <CustomButton onClick={() => addItem(item)} inverted >
                    Add to cart
                </CustomButton>
            </CardActions>


        </Card>
    );

};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

{/* <div className='collection-item'>
<div
    className='image'
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
/>
<div className='collection-footer'>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
</div>
<CustomButton onClick={() => addItem(item)} inverted>
    Add to cart
</CustomButton>
</div> */}