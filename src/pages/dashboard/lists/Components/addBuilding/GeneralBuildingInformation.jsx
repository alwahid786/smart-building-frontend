import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { TextInput, TextDescription } from './components/Input'
import { useFormik } from 'formik'
import { firstStepperGeneralInformation } from '../../../../../schema'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import { useAddBuildingMutation } from '../../../../../redux/api/buildingApi'
import { toast } from 'react-toastify'
import { useState } from 'react'

const GeneralBuildingInformation = ({ handleNext }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [addBuilding] = useAddBuildingMutation()

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      buildingName: '',
      ownerName: '',
      mobile: '',
      email: '',
      totalArea: '',
      unitOfArea: '',
      numberOfFloors: '',
      description: '',
      constructionYear: '',
      writtenAddress: '',
    },
    validationSchema: firstStepperGeneralInformation,
    // validateOnChange: true,
    // validateOnBlur: false,
    onSubmit: async (values, action) => {
      console.log(values)
      try {
        setIsLoading(true)
        const res = await addBuilding({
          buildingName: values.buildingName,
          ownerName: values.ownerName,
          mobile: values.mobile,
          email: values.email,
          totalArea: values.totalArea,
          unitOfArea: values.unitOfArea,
          numberOfFloors: values.numberOfFloors,
          description: values.description,
          constructionYear: values.constructionYear,
          writtenAddress: values.writtenAddress,
        })

        console.log('Response', res)

        action.resetForm()
        await handleNext()
        setIsLoading(false)
      } catch (error) {
        toast.error(error.data.message)
        setIsLoading(false)
      }

      // action.resetForm()
    },
  })
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
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <TextInput
            md="4"
            basic={{
              label: 'Building name',
              type: 'text',
              name: 'buildingName',
            }}
            valAndHandler={{
              handleBlur,
              handleChange,
              value: values?.buildingName,
            }}
            formik={{
              touched: touched?.buildingName,
              errors: errors?.buildingName,
            }}
          />
          <TextInput
            md="4"
            basic={{ label: 'Owner name', type: 'text', name: 'ownerName' }}
            valAndHandler={{
              handleBlur,
              handleChange,
              value: values.ownerName,
            }}
            formik={{ touched: touched.ownerName, errors: errors.ownerName }}
          />
          {/* <TextInput
            basic={{ label: 'phone', type: 'text', name: 'mobile' }}
            valAndHandler={{ handleBlur, handleChange, value: values.mobile }}
            formik={{ touched: touched.mobile, errors: errors.mobile }}
          /> */}
          <Grid item md={4} sm={6} xs={12}>
            <PhoneInput
              country={''}
              enableSearch={true}
              value={values.mobile}
              onChange={(mobile) => setFieldValue('mobile', mobile)}
              onBlur={handleBlur('mobile')}
              inputStyle={{
                width: '100%', // Adjust width as needed
                height: '40px', // Adjust height as needed
                fontSize: '14px', // Adjust font size as needed
                // padding: '5px', // Adjust padding as needed
                border:
                  touched.mobile && errors.mobile
                    ? '1px solid #D63F3F '
                    : '1px solid #ccc', // Example border style
                borderRadius: '4px',
                // Example border radius
              }}
            />
            {touched.mobile && errors.mobile ? (
              <div
                style={{ color: '#D63F3F', fontSize: '12px', marginTop: '5px' }}
              >
                {errors.mobile}
              </div>
            ) : null}
          </Grid>
          <TextInput
            md="4"
            basic={{ label: 'Email', type: 'text', name: 'email' }}
            valAndHandler={{ handleBlur, handleChange, value: values.email }}
            formik={{ touched: touched.email, errors: errors.email }}
          />
          <TextInput
            md="4"
            basic={{
              label: 'Total area (sq ft/m)',
              type: 'number',
              name: 'totalArea',
            }}
            valAndHandler={{
              handleBlur,
              handleChange,
              value: values.totalArea,
            }}
            formik={{ touched: touched.totalArea, errors: errors.totalArea }}
          />
          <Grid item md={4} sm={6} xs={12}>
            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel id="unit-label">Unit of area</InputLabel>
              <Select
                labelId="unit-label"
                name="unitOfArea"
                value={values.unitOfArea}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.unitOfArea && Boolean(errors.unitOfArea)}
                helperText={touched.unitOfArea && errors.unitOfArea}
                label="Unit of area"
              >
                <MenuItem value="sq ft">Square Feet</MenuItem>
                <MenuItem value="m">Meters</MenuItem>
              </Select>
              {touched.unitOfArea && errors.unitOfArea && (
                <FormHelperText sx={{ color: '#D43131' }}>
                  {errors.unitOfArea}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <TextInput
            md="4"
            basic={{
              label: 'No. of floors',
              type: 'number',
              name: 'numberOfFloors',
            }}
            valAndHandler={{
              handleBlur,
              handleChange,
              value: values.numberOfFloors,
            }}
            formik={{
              touched: touched.numberOfFloors,
              errors: errors.numberOfFloors,
            }}
          />

          <TextInput
            md="4"
            basic={{
              // label: 'Years of Construction',
              type: 'date',
              name: 'constructionYear',
            }}
            valAndHandler={{
              handleBlur,
              handleChange,
              value: values.constructionYear,
            }}
            formik={{
              touched: touched.constructionYear,
              errors: errors.constructionYear,
            }}
          />
          <TextInput
            md="4"
            basic={{ label: 'Address', type: 'text', name: 'writtenAddress' }}
            valAndHandler={{
              handleBlur,
              handleChange,
              value: values.writtenAddress,
            }}
            formik={{
              touched: touched.writtenAddress,
              errors: errors.writtenAddress,
            }}
          />

          <TextDescription
            basic={{ label: 'Description', type: 'text', name: 'description' }}
            valAndHandler={{
              handleBlur,
              handleChange,
              value: values.description,
            }}
            formik={{
              touched: touched.description,
              errors: errors.description,
            }}
          />
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
            disabled={isLoading}
            type="submit"
            variant="contained"
          >
            {isLoading ? 'Saving...' : 'Next'}
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default GeneralBuildingInformation
