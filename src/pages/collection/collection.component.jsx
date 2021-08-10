import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CollectionItem from 'components/collection-item/collection-item.component';

import { selectCollection } from 'redux/shop/shop.selectors';

// import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <Typography variant='h4'>{title}</Typography>
            <Grid container spacing={1}>
                {items.map(item => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CollectionItem key={item.id} item={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);