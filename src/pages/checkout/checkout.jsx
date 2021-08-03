import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckoutPage from 'pages/checkout/checkout.component';
import Information from 'pages/checkout/information';
import Review from 'pages/checkout/review';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        height: '40rem',
        margin: '0 auto',
        position: 'relative'
    },
    buttonGroup: {
        position: 'absolute',
        top: 80,
        right: 5
    },
    button: {
        margin: '5px'
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    infoContainer: {
        width: '80%',
        backgroundColor: 'green'
    }
}));

function getSteps() {
    return ['Check Shopping Cart', 'Enter Your Information', 'Payment'];
}



export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [info, setInfo] = useState({});
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };



    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };



    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleInfo = (item) => {
        console.log(item)
        setInfo(item)
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <CheckoutPage />;
            case 1:
                return <Information handleNext={handleNext} handleBack={handleBack} handleInfo={handleInfo} />;
            case 2:
                return <Review info={info} />;
            default:
                return 'Unknown step';
        }
    }



    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        {activeStep !== 1 ? <div className={classes.buttonGroup}>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} >
                                Back
                            </Button>

                            <Button
                                disabled={activeStep === 2}
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div> : null}
                    </div>
                )}
            </div>
        </div>
    );
}
