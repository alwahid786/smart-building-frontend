/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import CustomInputFileBtn from '../components/CustomInputFileBtn'
import ImageEdit from '../../../../../../asset/svgs/GrayImageEdit'
import ImageDelete from '../../../../../../asset/svgs/ImageDelete'

const DUMMYSENSOS = [
  { value: 'sensor1', label: 'Sensor 1' },
  { value: 'sensor2', label: 'Sensor 2' },
  { value: 'sensor3', label: 'Sensor 3' },
]

const AddFloor = ({ handleBack }) => {
  const [singleSensor, setSingleSensor] = useState('default')
  const [sensors, setSensors] = useState([])

  const handleChange = (event) => {
    setSingleSensor(event.target.value)
  }

  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const handleFileSelect = (file) => {
    setSelectedFile(file)
    const fileUrl = URL.createObjectURL(file)
    setPreviewUrl(fileUrl)
  }

  const deleteImage = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
  }

  const sensorDeleteHandler = (name) => {
    let filteredSensrs = sensors.filter((sensor) => sensor !== name)
    setSensors(filteredSensrs)
  }

  useEffect(() => {
    if (singleSensor && !sensors.includes(singleSensor)) {
      setSensors((prev) => [...prev, singleSensor])
      setSingleSensor('')
    }
    console.log(sensors)
  }, [singleSensor, sensors])

  return (
    <Box>
      <Accordion defaultExpanded>
        <AccordionSummary
          // expandIcon=""
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SubAddFloors
            sensors={sensors}
            sensorDeleteHandler={sensorDeleteHandler}
            deleteImage={deleteImage}
            selectedFile={selectedFile}
            previewUrl={previewUrl}
            handleChange={handleChange}
            handleFileSelect={handleFileSelect}
          />
        </AccordionDetails>
      </Accordion>

      <Box>
        <Button
          sx={{
            backgroundImage: 'linear-gradient(to right, #7E3FF6, #AC20FE)',
            padding: '0 40px',
            fontSize: '20px',
            textTransform: 'none',
            ':disabled': {
              color: 'white',
              opacity: '0.5',
              cursor: 'not-allowed',
            },
          }}
          variant="contained"
        >
          Add More Floor
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'end',
        }}
      >
        <Button
          sx={{
            backgroundImage: 'linear-gradient(to right, #7E3FF6, #AC20FE)',
            padding: '0 40px',
            fontSize: '20px',
            textTransform: 'none',
            ':disabled': {
              color: 'white',
              opacity: '0.5',
              cursor: 'not-allowed',
            },
          }}
          variant="contained"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: '#7B42F6',
            textTransform: 'none',
            border: '1px solid #7B42F6',
            fontSize: '20px',
            padding: '0 30px',
          }}
        >
          Cancel
        </Button>
        <Button
          sx={{
            backgroundImage: 'linear-gradient(to right, #7E3FF6, #AC20FE)',
            padding: '0 40px',
            fontSize: '20px',
            textTransform: 'none',
            ':disabled': {
              color: 'white',
              opacity: '0.5',
              cursor: 'not-allowed',
            },
          }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default AddFloor

export const SubAddFloors = ({
  previewUrl,
  deleteImage,
  sensorDeleteHandler,
  handleFileSelect,
  sensors,
  singleSensor,
  handleChange,
}) => {
  return (
    <>
      <Box sx={{ textAlign: 'left', marginY: '24px' }}>
        {' '}
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '27px',
            color: '#414141',
          }}
        >
          Add Floors
        </Typography>{' '}
      </Box>

      <Grid container spacing={2}>
        <Grid item md={6} sm={6} xs={12}>
          <TextField
            label="Floor"
            type="number"
            name="floor"
            fullWidth
            size="small"
            min="0"
            inputProps={{ min: 1 }}
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <TextField
            label="Rooms"
            type="number"
            name="rooms"
            fullWidth
            size="small"
            inputProps={{ min: 1 }}
            onInput={(e) => {
              e.target.value = Math.max('1', parseInt(e.target.value) || '1')
            }}
          />
        </Grid>
      </Grid>
      <Box>
        <Box sx={{ textAlign: 'left', marginY: '24px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'space-between',
            }}
          >
            {' '}
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '27px',
                color: '#414141',
              }}
            >
              Upload 2D Model Of Building
            </Typography>{' '}
            {previewUrl && (
              <Box sx={{ display: 'flex', gap: '20px' }}>
                <Box sx={{ cursor: 'pointer' }} onClick={deleteImage}>
                  <ImageDelete />
                </Box>
                <Box sx={{ cursor: 'pointer' }}>
                  <ImageEdit />
                </Box>{' '}
              </Box>
            )}
          </Box>
        </Box>

        {previewUrl ? (
          <Box
            sx={{
              marginTop: '20px',
              border: '2px solid #FF7F3E',
              borderRadius: '20px',
              overflow: 'hidden', // Ensure the border-radius is applied to the image
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
              maxWidth: '100%', // Ensure the box does not overflow its container
              height: 'auto',
            }}
          >
            <img
              src={previewUrl}
              alt="Selected"
              style={{
                width: '100%',
                height: 'auto', // Ensure the image maintains its aspect ratio
                display: 'block', // Remove the gap below the image
                borderRadius: '20px', // Apply the border-radius to the image
              }}
            />
          </Box>
        ) : (
          <CustomInputFileBtn onFileSelect={handleFileSelect} />
        )}
      </Box>
      <Box>
        <Box sx={{ textAlign: 'left', marginY: '24px' }}>
          {' '}
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '27px',
              color: '#414141',
            }}
          >
            Add Sensor
          </Typography>{' '}
        </Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Add Sensor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={singleSensor}
            label="Add Sensor"
            onChange={handleChange}
            size="medium"
          >
            {DUMMYSENSOS.map((sensor, index) => (
              <MenuItem value={sensor.value} key={index}>
                {sensor.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {sensors?.length > 0 &&
          sensors.map((s, i) => (
            <SingleSensor
              sensorDeleteHandler={sensorDeleteHandler}
              key={i}
              name={s}
            />
          ))}
      </Box>
    </>
  )
}

export const SingleSensor = ({ name, sensorDeleteHandler }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '30px',
        gap: '30px',
      }}
    >
      <Box
        sx={{
          padding: '10px 15px',
          boxShadow: '0px 0px 7px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexGrow: '1',
        }}
      >
        <Typography sx={{ fontSize: '16px', color: '#FF7F3E' }}>
          {name}
        </Typography>
        <Switch
          defaultChecked
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#FF7F3E',
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#7BC0F780',
            },
            '& .MuiSwitch-switchBase.Mui-checked:hover': {
              backgroundColor: 'rgba(255, 165, 0, 0.08)',
            },
            '& .MuiSwitch-track': {
              backgroundColor: '#7BC0F780',
            },
          }}
        />
      </Box>
      <Box
        onClick={() => sensorDeleteHandler(name)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <ImageDelete />
      </Box>
    </Box>
  )
}
