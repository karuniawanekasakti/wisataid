/* eslint-disable */
// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './CarouselImage.css';
export default function CarouselImage({ steps, activeStep, handleNext, handleBack }) {
    const theme = useTheme();

    return (
        <MobileStepper
            className="mobile-stepper"
            variant="dots"
            steps={steps}
            position="static"
            activeStep={activeStep}
            sx={{
                maxWidth: 1200,
                flexGrow: 1,
                '.MuiMobileStepper-dotActive': { backgroundColor: 'white' },
                // '.MuiMobileStepper-dot': { backgroundColor: 'white' },
            }}
            nextButton={
                <Button style={{fontWeight: 'bold',fontSize:'large'}} size="large" onClick={handleNext}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft color="action" style={{fontSize:'3rem'}}  sx={{ '&:hover': { color: 'primary.dark' } }}/>
                    ) : (
                        <KeyboardArrowRight color="action" style={{fontSize:'3rem'}} sx={{ '&:hover': { color: 'primary.dark' } }}/>
                    )}
                </Button>
            }
            backButton={
                <Button style={{fontWeight:'bold',fontSize:'large'}} size="large" onClick={handleBack}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight color="action" style={{fontSize:'3rem'}}  sx={{ '&:hover': { color: 'primary.dark' } }}/>
                    ) : (
                        <KeyboardArrowLeft color="action" style={{fontSize:'3rem'}}  sx={{ '&:hover': { color: 'primary.dark' } }}/>
                    )}
                </Button>
            }
            style={{justifyContent:'space-between', backgroundColor: 'transparent', boxShadow: 'none',
            }}
        />
    );
}