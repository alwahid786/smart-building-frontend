import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@mui/material'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CustomInputFileBtn from '../components/CustomInputFileBtn'
import ImageEdit from '../../../../../../asset/svgs/GrayImageEdit'
import ImageDelete from '../../../../../../asset/svgs/ImageDelete'
import { useSelector } from 'react-redux'
import { useAddBuildingFloorMutation } from '../../../../../../redux/api/buildingApi'

const AddFloor = ({ handleBack }) => {
  const [singleSensor, setSingleSensor] = useState('')
  const [sensors, setSensors] = useState([])
  const [formData, setFormData] = useState({ floor: '', rooms: '' })
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const fileMetadata = useSelector((state) => state.file.fileMetadata)
  const [addBuildingFloor] = useAddBuildingFloorMutation()
  const [floors, setFloors] = useState([
    {
      id: 1,
      sensors: [],
      selectedFile: null,
      previewUrl: null,
      singleSensor: '',
    },
  ])

  // const handleChange = (event) => {

  // }

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
    let filteredSensors = sensors.filter((sensor) => sensor !== name)
    setSensors(filteredSensors)
  }

  const handleAddFloor = () => {
    setFloors([
      ...floors,
      {
        id: floors.length + 1,
        sensors: [],
        selectedFile: null,
        previewUrl: null,
        singleSensor: '',
      },
    ])
  }
  const handleChange = (event, index) => {
    setSingleSensor(event.target.value)
    const updatedFloors = [...floors]
    updatedFloors[index].singleSensor = event.target.value
    setFloors(updatedFloors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Create a new FormData object
    const newFormData = new FormData()

    // Append form data to FormData object
    newFormData.append('floor', formData.floor)
    newFormData.append('rooms', formData.rooms)
    newFormData.append('image', selectedFile) // Assuming selectedFile is the File object from input

    console.log(formData)

    try {
      // Call your API or function to handle form submission
      await addBuildingFloor(newFormData) // Pass FormData object directly

      // Clear selected file and reset form data after successful submission
      setSelectedFile(null) // Reset selected file state
      setPreviewUrl(null) // Reset preview URL state
      setFormData({ floor: '', rooms: '' }) // Reset form data state
    } catch (error) {
      console.error('Error adding floor:', error)
      // Handle error as needed, e.g., show error message to user
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    if (singleSensor && !sensors.includes(singleSensor)) {
      setSensors((prev) => [...prev, singleSensor])
      setSingleSensor('')
    }
  }, [singleSensor, sensors])

  const handleDeleteFloor = (index) => {
    const updatedFloors = [...floors]
    updatedFloors.splice(index, 1)
    setFloors(updatedFloors)
  }
  return (
    <Box>
      {floors.map((floor, index) => (
        <Accordion key={floor.id} defaultExpanded>
          <AccordionSummary
            aria-controls={`panel${floor.id}-content`}
            id={`panel${floor.id}-header`}
          >
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '27px',
                color: '#414141',
              }}
            >
              Add Floor Data
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SubAddFloors
              formData={formData}
              sensors={floor.sensors}
              sensorDeleteHandler={(name) => sensorDeleteHandler(name, index)}
              deleteImage={() => deleteImage(index)}
              selectedFile={floor.selectedFile}
              previewUrl={floor.previewUrl}
              handleChange={(e) => handleChange(e, index)}
              handleFileSelect={(file) => handleFileSelect(file, index)}
              singleSensor={floor.singleSensor}
              handleDeleteFloor={() => handleDeleteFloor(index)}
              handleInputChange={handleInputChange}
            />
          </AccordionDetails>
        </Accordion>
      ))}

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
            marginTop: '10px',
          }}
          variant="contained"
          onClick={handleAddFloor}
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
          onClick={handleSubmit}
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

AddFloor.propTypes = {
  handleBack: PropTypes.func.isRequired,
}

export default AddFloor

const SubAddFloors = ({
  formData,
  previewUrl,
  deleteImage,
  sensorDeleteHandler,
  handleFileSelect,
  sensors,
  singleSensor,
  handleChange,
  handleInputChange,
  handleDeleteFloor,
}) => {
  // Ensure DUMMYSENSORS is defined and accessible
  const DUMMYSENSOS = [
    { label: 'Sensor 1', value: 'sensor1' },
    { label: 'Sensor 2', value: 'sensor2' },
    { label: 'Sensor 3', value: 'sensor3' },
  ]

  // Handle undefined singleSensor by providing a default value
  const selectedSensorValue = singleSensor ?? ''

  return (
    <>
      <form>
        <Grid container spacing={2}>
          <Grid item md={6} sm={6} xs={12}>
            <TextField
              label="Floor"
              type="number"
              name="floor"
              fullWidth
              size="small"
              inputProps={{ min: 1 }}
              value={formData.floor}
              onChange={handleInputChange}
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
              value={formData.rooms}
              onChange={handleInputChange}
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
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: '18px',
                  lineHeight: '27px',
                  color: '#414141',
                }}
              >
                Upload 2D Model Of Building
              </Typography>
              {previewUrl && (
                <Box sx={{ display: 'flex', gap: '20px' }}>
                  <Box sx={{ cursor: 'pointer' }} onClick={deleteImage}>
                    <ImageDelete />
                  </Box>
                  <Box sx={{ cursor: 'pointer' }}>
                    <ImageEdit />
                  </Box>
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
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '27px',
                color: '#414141',
              }}
            >
              Add Sensor
            </Typography>
          </Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Add Sensor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedSensorValue}
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

          <Box sx={{ marginY: '15px', textAlign: 'right' }}>
            <Button
              variant="contained"
              onClick={handleDeleteFloor}
              color="error"
            >
              Delete Floor
            </Button>
          </Box>
        </Box>
      </form>
    </>
  )
}

SubAddFloors.propTypes = {
  formData: PropTypes.shape({
    floor: PropTypes.string.isRequired,
    rooms: PropTypes.string.isRequired,
  }).isRequired,
  previewUrl: PropTypes.string,
  deleteImage: PropTypes.func.isRequired,
  sensorDeleteHandler: PropTypes.func.isRequired,
  handleFileSelect: PropTypes.func.isRequired,
  sensors: PropTypes.array.isRequired,
  singleSensor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
}

const SingleSensor = ({ name, sensorDeleteHandler }) => {
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

SingleSensor.propTypes = {
  name: PropTypes.string.isRequired,
  sensorDeleteHandler: PropTypes.func.isRequired,
}
