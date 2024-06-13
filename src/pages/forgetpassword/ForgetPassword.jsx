import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LightBox from '../../asset/svgs/LightBox'
// TextField

import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { forgetPassSchema } from '../../schema'
import { useFormik } from 'formik'
import loginBg from '../../asset/Images/login/LogIn2.png'
import { TextField, Button } from '@mui/material'

const ForgetPassword = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: '',
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgetPassSchema,
      onSubmit: (values, action) => {
        console.log(values)
        action.resetForm()
      },
    })
  return (
    <>
      <Box
        maxWidth="false"
        sx={{
          height: {
            xl: '100vh',
          },
          overflowY: 'hidden',
          padding: {
            xs: '0 !important',
            md: '0 0 !important',
            backgroundImage: `url(${loginBg})`,
            backgroundPosition: '100% 0%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          },
        }}
      >
        <Grid container padding={{ xs: '20px', md: '20px', xl: '50px' }}>
          <Grid
            item
            md={6}
            // xs={12}

            display={{ xs: 'none', md: 'flex' }}
            alignItems="start"
            justifyContent="center"
            height="100vh"
          >
            <Box
              sx={{
                color: '#fff',
                // height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '34px',
                  flexGrow: '1',
                  alignItems: 'center',
                  // justifyContent: 'start',
                }}
              >
                <LightBox />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: '24px',
                      sm: '20px',
                      md: '30px',
                    },
                    fontWeight: '600',
                    lineHeight: '45px',
                    letterSpacing: '5px',
                  }}
                >
                  Smart
                  <br />
                  Building
                </Typography>
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: '20px',
                      sm: '30px',
                      lg: '40px',
                    },
                    fontWeight: '600',
                    lineHeight: '60px',
                  }}
                >
                  Forget Password
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: {
                      xs: '16px',
                      sm: '18px',
                      md: '20px',
                    },
                    width: {
                      sm: '100%',
                      md: '80%',
                    },
                    display: 'inline-block',
                    lineHeight: '30px',
                  }}
                >
                  Enter Your Email To Change Your Password
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            // padding={{ xs: '20px', md: '50px' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                background: '#FFFFFF',
                borderRadius: '8px',
                padding: {
                  xs: '24px',
                  md: '48px',
                },
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  onClick={() => navigate('/login')}
                  sx={{
                    color: 'rgba(12, 35, 77, 1)',
                    fontSize: '14px',
                    marginBottom: '1.2vw',
                    display: 'inline-block',
                    cursor: 'pointer',
                  }}
                >
                  ← Back
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: '18px',
                      sm: '20px',
                      md: '24px',
                    },
                    fontWeight: '600',
                    color: 'rgba(123, 66, 246, 1)',
                    lineHeight: {
                      xs: '26px',
                      md: '36px',
                    },
                  }}
                >
                  Forget Password
                </Typography>
              </Box>
              <Box sx={{ marginTop: '32px' }}>
                <form onSubmit={handleSubmit}>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <label>Email</label>
                    <TextField
                      type="text"
                      placeholder="Your email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Box>

                  <Box sx={{ marginY: '20px' }}>
                    <Button
                      type="submit"
                      sx={{
                        width: '100%',
                        background:
                          'linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)',
                        textTransform: 'capitalize',
                      }}
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ForgetPassword
