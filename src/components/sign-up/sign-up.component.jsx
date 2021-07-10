import React, { useState } from 'react';
//material ui
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from 'components/sign-in/styledSignIn';
import Typography from '@material-ui/core/Typography';
//formik
import { Formik, ErrorMessage } from 'formik';
//Utils
import * as Yup from 'yup';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
//custom
import { CustomTextField } from 'material-ui/input/input';
import { CustomButton } from 'material-ui/button/CustomButton'




const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().required('Password is Required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignIn = () => {
    const classes = useStyles();
    const [error, setError] = useState('');
    const [displayError, setDisplayError] = useState(false);
    return (
        <div>
            <Formik
                initialValues={{ displayName: '', email: '', password: '', passwordConfirmation: '' }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    const { displayName, email, password } = values;
                    console.log(values)
                    try {
                        const { user } = await auth.createUserWithEmailAndPassword(
                            email,
                            password
                        );

                        await createUserProfileDocument(user, { displayName });
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
                    <form onSubmit={handleSubmit} className={classes.root} >
                        <Grid container spacing={3} >
                            <Grid item xs={12}>
                                <Typography color='textSecondary' varant='subtitle1'>Name</Typography>
                                <CustomTextField
                                    type='text'
                                    name='displayName'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.displayName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color='textSecondary' varant='subtitle1'>Account</Typography>
                                <CustomTextField
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color='textSecondary' varant='subtitle1'>Password</Typography>
                                <CustomTextField
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color='textSecondary' varant='subtitle1'>Confirm Password</Typography>
                                <CustomTextField
                                    type="password"
                                    name="passwordConfirmation"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirmation}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                {!displayError ? null : <Typography color='error' variant='caption'>{error}</Typography>}
                            </Grid>
                            <Grid item xs={6}>
                                <CustomButton type="submit" variant='outlined'>
                                    Submit
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