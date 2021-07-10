import React from 'react';
//material ui
import Grid from '@material-ui/core/Grid';
import { useStyles } from 'pages/homepage/StyledHomePage';
import Directory from 'components/directory/directory.component';
import CustomCarousel from 'material-ui/carousel/Carousel';
import Typography from '@material-ui/core/Typography';

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.homePage}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomCarousel />
                </Grid>
                <Grid item xs={12} mt={3}>
                    <Typography variant='h4'>繽紛夏日 穿出新流行 注入新活力</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Directory />
                </Grid>
            </Grid>

        </div>
    );
}

export default HomePage