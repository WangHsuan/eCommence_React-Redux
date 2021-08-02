import React from 'react';
//material ui
import Typography from '@material-ui/core/Typography'
import CollectionItem from '../collection-item/collection-item.component';
import Grid from '@material-ui/core/Grid';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        {/* <h1 className='title'>{title.toUpperCase()}</h1> */}
        <Typography variant='h5'>{title}</Typography>
        <div className='preview'>
            <Grid container spacing={1}>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CollectionItem key={item.id} item={item} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    </div>
);

export default CollectionPreview;