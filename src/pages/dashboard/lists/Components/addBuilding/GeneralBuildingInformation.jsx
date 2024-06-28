import { Box, Button, Grid } from '@mui/material'
import { TextInput, TextDescription } from './components/Input'
import { useFormik } from 'formik'
import { firstStepperGeneralInformation } from '../../../../../schema'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import { WidthFull } from '@mui/icons-material'

const GeneralBuildingInformation = () => {
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
      numberOfFloors: '',
      description: '',
      constructionYear: '',
      writtenAddress: '',
    },
    validationSchema: firstStepperGeneralInformation,
    // validateOnChange: true,
    // validateOnBlur: false,
    onSubmit: (values, action) => {
      console.log('values', values)
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
              country={'eg'}
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
            basic={{ label: 'Email', type: 'text', name: 'email' }}
            valAndHandler={{ handleBlur, handleChange, value: values.email }}
            formik={{ touched: touched.email, errors: errors.email }}
          />
          <TextInput
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
          <TextInput
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
