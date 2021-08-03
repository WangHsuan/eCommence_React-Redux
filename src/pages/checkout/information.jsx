import React, { useState } from 'react';
//material ui
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//formik
import { Formik, Field } from 'formik';
//Utils
import * as Yup from 'yup';

//custom
import { CustomTextField } from 'material-ui/input/input';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '30rem',
        margin: '0 auto'
    },
    buttonGroup: {
        position: 'absolute',
        top: 80,
        right: 5
    },
    button: {
        margin: '5px'
    }
}));



const InfoSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    phone: Yup.string().required('Phone is Required'),
});

const Information = ({ handleNext, handleBack, handleInfo }) => {
    const classes = useStyles();
    const [error, setError] = useState('');
    const [displayError, setDisplayError] = useState(false);
    return (
        <div>
            <Formik
                initialValues={{ name: '', phone: '', address: '' }}
                validationSchema={InfoSchema}
                onSubmit={async (values) => {

                    handleInfo(values)
                    handleNext();
                }}

            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} noValidate className={classes.container} >
                        <Grid container spacing={3} justifyContent='center' alignItems='center'>
                            <Grid item xs={10}>
                                <CustomTextField
                                    type="text"
                                    name="name"
                                    label='Name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <CustomTextField
                                    type="text"
                                    name="phone"
                                    label='Phone'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <CustomTextField
                                    type="text"
                                    name="address"
                                    label='Address'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                {!displayError ? null : <Typography color='error' variant='caption'>{error}</Typography>}
                            </Grid>

                            <div className={classes.buttonGroup}>
                                <Button onClick={handleBack} className={classes.button}>
                                    Back
                                </Button>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    className={classes.button}
                                >
                                    Next
                                </Button>
                            </div>


                        </Grid>


                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Information;