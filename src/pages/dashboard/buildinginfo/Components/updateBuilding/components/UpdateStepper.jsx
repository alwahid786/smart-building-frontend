import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { StepConnector } from '@mui/material'
import UpdateInfo from '../firstStepper/UpdateInfo'
import UpdatePhotos from '../secondStepper/UpdatePhotos'
import UpdateMap from '../thirdStepper/UpdateMap'
import UpdateFloor from '../fourthStepper/UpdateFloor'

const steps = ['General Info', 'Photos', 'Mapping Info', 'Add Floors']

const getStepContent = (step, handleNext, handleBack) => {
  switch (step) {
    case 0:
      return <UpdateInfo handleNext={handleNext} />
    case 1:
      return <UpdatePhotos handleNext={handleNext} handleBack={handleBack} />
    case 2:
      return <UpdateMap handleBack={handleBack} handleNext={handleNext} />
    case 3:
      return <UpdateFloor handleBack={handleBack} />
    default:
      return 'Unknown step'
  }
}

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        activeStep={activeStep}
        sx={{ marginY: '2rem' }}
        connector={<StepConnector sx={{ border: '1px solid #B029FC' }} />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconProps={{
                style: {
                  color: '#B029FC',
                  fontSize: '2.5rem',
                  // border: '2px solid #B029FC',
                  // borderRadius: '100%',
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you are finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ mt: 2, mb: 1 }}>
            {getStepContent(activeStep, handleNext, handleBack)}
          </Box>
        </>
      )}
    </Box>
  )
}

export default StepperComponent
