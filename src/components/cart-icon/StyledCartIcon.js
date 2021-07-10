import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>({
    cartIcon:{
        width: '45px',
        height: '45px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '& .shoppingIcon':{
            width:'24px',
            height:'24px',
            backgroundColor:'#ffffff',
            opacity:0.9
        },
        '& .iconCount':{
            position:'absolute',
            bottom:'12px',
            color:'#dedede'
        }
    },
}))