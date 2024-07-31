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
import { useAddBuildingFloorMutation } from '../../../../../../redux/api/buildingApi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetAllSensorsQuery } from '../../../../../../redux/api/sensorApi'


const AddFloor = ({ handleBack }) => {
  const buildingId = useSelector((state) => state.form.buildingId);
  const navigate = useNavigate();



  const [floors, setFloors] = useState([
    {
      id: 1,
      sensors: [],
      selectedFile: null,
      previewUrl: null,
      singleSensor: '',
      formData: { floor: '', rooms: '' },
    },
  ])

  const [addBuildingFloor] = useAddBuildingFloorMutation()

  const handleAddFloor = () => {
    setFloors([
      ...floors,
      {
        id: floors.length + 1,
        sensors: [],
        selectedFile: null,
        previewUrl: null,
        singleSensor: '',
        formData: { floor: '', rooms: '' },
      },
    ])
  }

  const handleSensorChange = (event, index) => {

    // Create a new copy of the floors array and update the specific floor's singleSensor
    const updatedFloors = [...floors];
    updatedFloors[index].singleSensor = event.target.value;
    // Update the state with the new floors array
    setFloors(updatedFloors);

  }

  const handleChange = (event, index) => {
    const { name, value } = event.target
    const updatedFloors = [...floors]
    updatedFloors[index].formData[name] = value
    setFloors(updatedFloors)
  }

  const handleFileSelect = (file, index) => {
    const updatedFloors = [...floors]
    updatedFloors[index].selectedFile = file
    updatedFloors[index].previewUrl = URL.createObjectURL(file)
    setFloors(updatedFloors)
  }

  const deleteImage = (index) => {
    const updatedFloors = [...floors]
    updatedFloors[index].selectedFile = null
    updatedFloors[index].previewUrl = null
    setFloors(updatedFloors)
  }

  const sensorDeleteHandler = (sensorId) => {
    const updatedFloors = [...floors]
    const floorId = updatedFloors.findIndex((floor) => floor.sensors.map((sensor) => sensor._id === sensorId))
    const sensors = updatedFloors[floorId].sensors
    const filteredSensors = sensors.filter(jsonString => JSON.parse(jsonString)._id !== sensorId);
    updatedFloors[floorId].sensors = filteredSensors
    setFloors(updatedFloors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      for (const floor of floors) {
        const newFormData = new FormData();
        newFormData.append('floor', floor.formData.floor);
        newFormData.append('rooms', floor.formData.rooms);
        newFormData.append("area", floor.formData.area);
        newFormData.append("floorType", floor.formData.floorType);
        newFormData.append('image', floor.selectedFile);
        newFormData.append('buildingId', buildingId);
        newFormData.append('unitOfArea', floor.formData.unitOfArea);
        newFormData.append('sensors', JSON.stringify(floor.sensors)); // Ensure it's a JSON string

        const res = await addBuildingFloor(newFormData);

        if (res.data.success === true) { navigate(`/dashboard/list`) }

      }
    } catch (error) {

      toast.error(error.data.message);
    }
  };

  const handleDeleteFloor = (index) => {
    const updatedFloors = [...floors]
    updatedFloors.splice(index, 1)
    setFloors(updatedFloors)
  }

  useEffect(() => {
    const updatedFloors = floors.map((floor) => {
      if (floor.singleSensor && !floor.sensors.includes(floor.singleSensor)) {
        return {
          ...floor,
          sensors: [...floor.sensors, floor.singleSensor],
          singleSensor: '',
        }
      }
      return floor
    })
    setFloors(updatedFloors)
  }, [floors])

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
              formData={floor.formData}
              sensors={floor.sensors}
              sensorDeleteHandler={(name) => sensorDeleteHandler(name, index)}
              deleteImage={() => deleteImage(index)}
              selectedFile={floor.selectedFile}
              previewUrl={floor.previewUrl}
              handleChange={(e) => handleChange(e, index)}
              handleFileSelect={(file) => handleFileSelect(file, index)}
              singleSensor={floor.singleSensor}
              handleDeleteFloor={() => handleDeleteFloor(index)}
              handleInputChange={(e) => handleChange(e, index)}
              handleSensorChange={(e) => handleSensorChange(e, index)}
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
  handleInputChange,
  // eslint-disable-next-line react/prop-types
  handleDeleteFloor,
  // eslint-disable-next-line react/prop-types
  handleSensorChange,

  // eslint-disable-next-line react/prop-types

}) => {

  const { data: Allsensors } = useGetAllSensorsQuery()

  const selectedSensorValue = singleSensor ?? ''

  const currencies = [
    {
      value: 'residential',
      label: 'Residential',
    },
    {
      value: 'commercial',
      label: 'Commercial',
    },
    {
      value: 'public',
      label: 'Public',
    },
    {
      value: 'private',
      label: 'Private',
    },
  ];

  return (
    <>
      <form>
        <Grid container spacing={2}>
          <Grid item md={6} sm={6} xs={12}>
            <TextField
              label="Floor"
              type="text"
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
          <Grid item md={6} sm={6} xs={12}>
            <div>
              <TextField
                id="floorType"
                select
                label="Select"
                defaultValue="residential"
                fullWidth
                size='small'
                name='floorType'
                // eslint-disable-next-line react/prop-types
                value={formData.floorType}
                onChange={handleInputChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value} >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

            </div>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <TextField
              label="Floor area"
              type="number"
              name="area"
              fullWidth
              size="small"
              inputProps={{ min: 1 }}
              onInput={(e) => {
                e.target.value = Math.max('1', parseInt(e.target.value) || '1')
              }}
              // eslint-disable-next-line react/prop-types
              value={formData.area}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid item md={4} sm={6} xs={12} sx={{ marginTop: '20px' }}>

        <FormControl size="small" fullWidth variant="outlined">
              <InputLabel id="unit-label">Unit of Area (sq ft/m)</InputLabel>
              <Select
                labelId="unit-label"
                name="unitOfArea"
                label="Unit of Area (sq ft/m)"
                // eslint-disable-next-line react/prop-types
                value={formData.unitOfArea}
                onChange={handleInputChange}
              >
                <MenuItem value="sq ft">Square Feet</MenuItem>
                <MenuItem value="m">Meters</MenuItem>
              </Select>
            </FormControl>

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
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '100%',
                height: 'auto',
              }}
            >
              <img
                src={previewUrl}
                alt="Selected"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '20px',
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
              size="medium"
              onChange={handleSensorChange}
            >
              {Allsensors?.map((sensor, index) => (
                <MenuItem value={JSON.stringify(sensor)} key={index} >
                  {sensor?.sensorName}
                </MenuItem>))
              }
            </Select>
          </FormControl>

          {sensors?.length > 0 &&
            sensors.map((s, i) => (

              <SingleSensor
                sensorDeleteHandler={sensorDeleteHandler}
                key={i}
                name={JSON.parse(s)}
              />

            )

            )


          }

          <Box sx={{ marginY: '15px', textAlign: 'right' }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteFloor}
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
          {name?.sensorName}
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
        onClick={() => sensorDeleteHandler(name?._id)}
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
