import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetSingleBuildingQuery } from '../../../../../../redux/api/buildingApi';

const UpdateInfo = ({ handleNext }) => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetSingleBuildingQuery(id);

  const [formData, setFormData] = useState({
    buildingName: '',
    ownerName: '',
    phoneNumber: '',
    email: '',
    totalArea: '',
    unitOfArea: '',
    numberOfFloors: '',
    constructionYear: '',
    writtenAddress: '',
    description: '',
  });

  useEffect(() => {
    if (data) {
     
      setFormData({
        buildingName: data?.buildingName || '',
        ownerName: data?.ownerName || '',
        phoneNumber: data?.phoneNumber || '',
        email: data?.email || '',
        totalArea: data?.totalArea || '',
        unitOfArea: data?.unitOfArea || '',
        numberOfFloors: data?.numberOfFloors || '',
        constructionYear: data?.constructionYear || '',
        writtenAddress: data?.writtenAddress || '',
        description: data?.description || '',
      });
    }
  }, [data]);

  useEffect(() => {}, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUnitChange = (event) => {
    setFormData({
      ...formData,
      unitOfArea: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(setBuildingData(formData))
    handleNext(); // Proceed to the next step
  };

  const handleCancel = () => {
    setFormData({
      buildingName: '',
      ownerName: '',
      phoneNumber: '',
      email: '',
      totalArea: '',
      unitOfArea: '',
      numberOfFloors: '',
      constructionYear: '',
      writtenAddress: '',
      description: '',
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <Box>
      <Box sx={{ textAlign: 'center', marginY: '24px' }}>
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '30px',
            color: '#414141',
          }}
        >
          General Building Information
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              size="small"
              label="Building Name"
              type="text"
              name="buildingName"
              fullWidth
              value={formData?.buildingName}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Owner Name"
              type="text"
              name="ownerName"
              size="small"
              fullWidth
              value={formData?.ownerName}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              size="small"
              fullWidth
              value={formData?.phoneNumber}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Email"
              type="email"
              name="email"
              size="small"
              fullWidth
              value={formData?.email}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Total Area (sq ft/m)"
              type="number"
              name="totalArea"
              fullWidth
              size="small"
              value={formData?.totalArea}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel id="unit-label">Unit of Area (sq ft/m)</InputLabel>
              <Select
                labelId="unit-label"
                name="unitOfArea"
                label="Unit of Area (sq ft/m)"
                value={formData?.unitOfArea}
                onChange={handleUnitChange}
              >
                <MenuItem value="sq ft">Square Feet</MenuItem>
                <MenuItem value="m">Meters</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Number of Floors"
              type="number"
              name="numberOfFloors"
              size="small"
              fullWidth
              value={formData?.numberOfFloors}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              type="date"
              name="constructionYear"
              size="small"
              fullWidth
              value={formData?.constructionYear}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Address"
              type="text"
              name="writtenAddress"
              size="small"
              fullWidth
              value={formData?.writtenAddress}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <TextField
              multiline
              fullWidth
              rows={4}
              label="Description"
              type="text"
              name="description"
              value={formData?.description}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            gap: '10px',
            justifyContent: 'end',
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: '#7B42F6',
              textTransform: 'none',
              border: '1px solid #7B42F6',
              fontSize: '20px',
              padding: '0 30px',
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
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
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

UpdateInfo.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default UpdateInfo;
