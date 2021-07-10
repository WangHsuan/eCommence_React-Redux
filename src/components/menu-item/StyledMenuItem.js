import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    content: {
        height: '60px',
        width: '10rem',
        padding: '0 25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        opacity: 0.7,
        position: 'absolute'
    },
    menuItem: {
        minWidth: '30%',
        height: '360px',
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        border: '1px solid #e8e8e8',
        margin: '0 7.5px 15px',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer',
            '& .background-image ': {
                transform: 'scale(1.1)',
                transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
            },
            '& .content': {
                opacity: 0.9,
            }
        },
        '&.large': {
            height: '480px'
        },

        '&:first-child': {
            marginRight: '7.5px'
        },

        '&:last-child': {
            marginLeft: '7.5px'
        },
        '& .background-image': {
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }
}))