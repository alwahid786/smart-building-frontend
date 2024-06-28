import { Box, Button, Grid } from '@mui/material'
import {
  TextInput,
  TextDescription,
  TextConstruction,
} from './components/Input'
import { useFormik } from 'formik'
import { firstStepperGeneralInformation } from '../../../../../schema'

const GeneralBuildingInformation = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        buildingName: '',
        ownername: '',
        phone: '',
        email: '',
        area: '',
        floors: '',
        description: '',
        year: '',
        address: '',
      },
      validationSchema: firstStepperGeneralInformation,
      // validateOnChange: true,
      // validateOnBlur: false,
      onSubmit: (values, action) => {
        action.resetForm()
      },
    })
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <TextInput
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
            basic={{ label: 'Owner name', type: 'text', name: 'ownername' }}
            valAndHandler={{
              handleBlur,
              handleChange,
              value: values.ownername,
            }}
            formik={{ touched: touched.ownername, errors: errors.ownername }}
          />
          <TextInput
            basic={{ label: 'phone', type: 'text', name: 'phone' }}
            valAndHandler={{ handleBlur, handleChange, value: values.phone }}
            formik={{ touched: touched.phone, errors: errors.phone }}
          />
          <TextInput
            basic={{ label: 'Email', type: 'text', name: 'email' }}
            valAndHandler={{ handleBlur, handleChange, value: values.email }}
            formik={{ touched: touched.email, errors: errors.email }}
          />
          <TextInput
            basic={{
              label: 'Total area (sq ft/m)',
              type: 'number',
              name: 'area',
            }}
            valAndHandler={{ handleBlur, handleChange, value: values.area }}
            formik={{ touched: touched.area, errors: errors.area }}
          />
          <TextInput
            basic={{
              label: 'No. of floors',
              type: 'number',
              name: 'floors',
            }}
            valAndHandler={{ handleBlur, handleChange, value: values.floors }}
            formik={{ touched: touched.floors, errors: errors.floors }}
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

          <TextInput
            basic={{
              label: 'Years of Construction',
              type: 'date',
              name: 'year',
            }}
            valAndHandler={{ handleBlur, handleChange, value: values.year }}
            formik={{ touched: touched.year, errors: errors.year }}
          />
          <TextInput
            basic={{ label: 'Address', type: 'text', name: 'address' }}
            valAndHandler={{ handleBlur, handleChange, value: values.address }}
            formik={{ touched: touched.address, errors: errors.address }}
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
          <Button variant="outlined">Cancel</Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default GeneralBuildingInformation
