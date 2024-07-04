/* eslint-disable react/prop-types */
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
} from '@mui/material'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import { AppContext } from '../../../../../context/context'
import { useContext } from 'react'

const GeneralBuildingInformation = ({ handleNext }) => {
  const { userData, setUserData } = useContext(AppContext)

  console.log(userData)

  return (
    <Box>
      <Box sx={{ textAlign: 'center', marginY: '24px' }}>
        {' '}
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '30px',
            color: '#414141',
          }}
        >
          General Building Information
        </Typography>{' '}
      </Box>
      <form>
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              // md="4"
              // basic={{
              size="small"
              label="Building name"
              type="text"
              name="buildingName"
              fullWidth
              // }}
              value={userData['buildingName']}
              onChange={(e) =>
                setUserData({ ...userData, buildingName: e.target.value })
              }
              required
              aria-required
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Owner name"
              type="text"
              name="ownerName"
              value={userData['ownerName']}
              onChange={(e) =>
                setUserData({ ...userData, ownerName: e.target.value })
              }
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <PhoneInput
              country={''}
              enableSearch={true}
              value={userData['ownerName']}
              onChange={(mobile) => setUserData({ ...userData, mobile })}
              inputStyle={{
                width: '100%',
                height: '40px',
                fontSize: '14px',

                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Email"
              type="email"
              name="email"
              size="small"
              fullWidth
              value={userData['email']}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Total area (sq ft/m)"
              type="number"
              name="totalArea"
              fullWidth
              value={userData['totalArea']}
              onChange={(e) =>
                setUserData({ ...userData, totalArea: e.target.value })
              }
              size="small"
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel id="unit-label">Unit of area(sq ft/m)</InputLabel>
              <Select
                labelId="unit-label"
                name="unitOfArea"
                value={userData.unitOfArea || ''} // Ensure the value is not undefined
                onChange={(e) =>
                  setUserData({ ...userData, unitOfArea: e.target.value })
                }
                label="Unit of area(sq ft/m)"
              >
                <MenuItem value="sq ft">Square Feet</MenuItem>
                <MenuItem value="m">Meters</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="No. of floors"
              type="number"
              name="numberOfFloors"
              size="small"
              fullWidth
              value={userData['numberOfFloors']}
              onChange={(e) =>
                setUserData({ ...userData, numberOfFloors: e.target.value })
              }
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              type="date"
              name="constructionYear"
              size="small"
              fullWidth
              value={userData['constructionYear']}
              onChange={(e) =>
                setUserData({ ...userData, constructionYear: e.target.value })
              }
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Address"
              type="text"
              name="writtenAddress"
              size="small"
              fullWidth
              value={userData['writtenAddress']}
              onChange={(e) =>
                setUserData({ ...userData, writtenAddress: e.target.value })
              }
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
              value={userData['description']}
              onChange={(e) =>
                setUserData({ ...userData, description: e.target.value })
              }
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
            onClick={handleNext}
            variant="contained"
          >
            Next
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default GeneralBuildingInformation
