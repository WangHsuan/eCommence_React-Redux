import React, { useState } from 'react';
//material ui
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from 'components/sign-in/styledSignIn';
import Typography from '@material-ui/core/Typography';
//formik
import { Formik, Field } from 'formik';
//Utils
import * as Yup from 'yup';
import { auth, signInWithGoogle } from 'firebase/firebase.utils';
//custom
import { CustomTextField, CheckBox } from 'material-ui/input/input';
import { CustomButton } from 'material-ui/button/CustomButton'




const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().required('Password is Required'),
    declaration: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
});

const SignIn = () => {
    const classes = useStyles();
    const [error, setError] = useState('');
    const [displayError, setDisplayError] = useState(false);
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '', declaration: false }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    const { email, password, toggle } = values;
                    console.log(values)
                    try {
                        await auth.signInWithEmailAndPassword(email, password);
                    } catch (error) {
                        setError(error.message)
                        setDisplayError(true)
                    }
                }}

            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} className={classes.root} noValidate  >
                        <Grid container spacing={3} justifyContent='center'>
                            <Grid item xs={12}>
                                <CustomTextField
                                    type="email"
                                    name="email"
                                    label='Account'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    type="password"
                                    name="password"
                                    label='Password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {!displayError ? null : <Typography color='error' variant='caption'>{error}</Typography>}
                            </Grid>
                            <Grid item xs={12}>
                                <label>
                                    <CheckBox type="checkbox" name="declaration" />

                                </label>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomButton type="submit" variant='outlined'>
                                    Submit
                                </CustomButton>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomButton variant='outlined' onClick={signInWithGoogle} isGoogleSignIn>
                                    SignIn With Google
                                </CustomButton>
                            </Grid>

                        </Grid>


                    </form>
                )}
            </Formik>
        </div>
    )
}

export default SignIn;