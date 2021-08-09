import React from 'react';
//material ui
import CollectionItem from '../collection-item/collection-item.component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    collectionPreview: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',

    },
    title: {
        fontSize: '28px',
        marginBottom: '25px',
    },
    preview: {
        display: 'flex',
        justifyContent: 'flex-start',
    }
}))

const CollectionPreview = ({ title, items, category }) => {
    const classes = useStyles();
    return (
        <div className={classes.collectionPreview}>

            <div className={classes.preview}>
                <Grid container spacing={1}>
                    {items
                        .filter((item, idx) => title === category)
                        .map(item => (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <CollectionItem key={item.id} item={item} />
                            </Grid>
                        ))}
                </Grid>
            </div>
        </div>
    );
}

export default CollectionPreview;