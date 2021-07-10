import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    root:{
        minWidth: '30%',
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: '0 7.5px 15px',
        overflow: 'hidden',
        '& :hover':{
            opacity:0.7,
        }
    },
    img:{
        width:'80rem',
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
    }
}))

const MenuItem = ({ imageUrl,  history}) => {
    const classes = useStyles();
    return (
    
        <div
            className={classes.root}
            onClick={() => history.push(`/shop`)}
        >
            <div
                className={classes.img}
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
        </div>
    );
}

export default withRouter(MenuItem);