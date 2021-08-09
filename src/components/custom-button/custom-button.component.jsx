import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '165px',
        width: '50px',
        height: '50px',
        letterSpacing: '0.5px',
        lineHeight: '50px',
        padding: '0 35px 0 35px',
        fontSize: '15px',
        backgroundColor: 'black',
        color: 'white',
        textzTransform: 'uppercase',
        fontFamily: 'Open Sans Condensed',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '5px',

        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid black',
        },

    }
}))
const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
}) => {
    const classes = useStyles();
    return (
        <Button
            className={classes.root}
            {...otherProps}
        >
            {children}
        </Button>
    );
}

export default CustomButton;