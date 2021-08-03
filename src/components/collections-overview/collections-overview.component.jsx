import React from 'react';
import CollectionPreview from 'components/collection-preview/collection-preview';
//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from 'redux/shop/shop.selectors';
//scss
import './collections-overview.styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {

        width: '100%',
        margin: '0 auto',
        backgroundColor: theme.palette.background.paper,
        '& .MuiAppBar-colorDefault': {
            backgroundColor: '#ffffff'
        },
        '& .MuiPaper-elevation4': {
            boxShadow: 'none'
        }

    },
    tabPanel: {
        margin: '0 auto'
    }
}));

const CollectionsOverview = ({ collections }) => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    className={classes.tabPanel}
                >
                    <Tab label="Mens" {...a11yProps(0)} />
                    <Tab label="Womens" {...a11yProps(1)} />
                    <Tab label="Hats" {...a11yProps(1)} />
                    <Tab label="Jackets" {...a11yProps(1)} />
                    <Tab label="Sneakers" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} >
                <div className='collections-overview'>
                    {collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} category='Mens' {...otherCollectionProps} />
                    ))}
                </div>

            </TabPanel>
            <TabPanel value={value} index={1} >
                <div className='collections-overview'>
                    {collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} category='Womens' {...otherCollectionProps} />
                    ))}
                </div>
            </TabPanel>
            <TabPanel value={value} index={2} >
                <div className='collections-overview'>
                    {collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} category='Hats' {...otherCollectionProps} />
                    ))}
                </div>
            </TabPanel>
            <TabPanel value={value} index={3} >
                <div className='collections-overview'>
                    {collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} category='Jackets' {...otherCollectionProps} />
                    ))}
                </div>
            </TabPanel>
            <TabPanel value={value} index={4} >
                <div className='collections-overview'>
                    {collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} category='Sneakers' {...otherCollectionProps} />
                    ))}
                </div>
            </TabPanel>

        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);