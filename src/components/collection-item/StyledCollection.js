import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '17rem',
        height: '370px',
        position: 'relative',
        '& .MuiButton-root': {
            position: 'absolute',
            top: '70%',
            left: '25%',
            display: 'none',
        },
        '&:hover': {
            '& .MuiButton-root': {
                display: 'flex',
            },

            opacity: 0.8

        }
    },
    media: {
        height: 310,
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '5px',
    },

}))