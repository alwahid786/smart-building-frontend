import { useNavigate } from 'react-router-dom'

import loginbg from '../../asset/Images/login/LogIn2.png'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LightBox from '../../asset/svgs/LightBox'

import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import { Button, FormControlLabel, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { loginSchema } from '../../schema'

const initialValues = {
  name: '',
  password: '',
}

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values)
        action.resetForm()
      },
    })

  const navigate = useNavigate()

  return (
    <>
      {/* {isLoading && <GlobalLoader /> */}
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
            backgroundImage: `url(${loginbg})`,
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
                  Sign In to
                  <br /> Digital Building Passport
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
                  it is a long established fact that a reader will be distracted
                  by the readable content of a page
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
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: '18px',
                      sm: '20px',
                      md: '24px',
                    },
                    fontWeight: '600',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: {
                      xs: '26px',
                      md: '36px',
                    },
                  }}
                >
                  Welcome To
                </Typography>
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
                  Digital Building Passport
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: {
                      xs: '14px',
                      md: '16px',
                    },
                    color: 'rgba(17, 17, 17, 0.6)',
                    margin: '0',
                    lineHeight: '28px',
                    fontWeight: '400',
                  }}
                >
                  We make it easy for everyone to monitor your building status.
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
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      marginTop: '1vw',
                    }}
                  >
                    <label>Password</label>
                    <TextField
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Box>

                  <Box
                    style={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center',
                      marginTop: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <FormControlLabel
                      value="remember"
                      control={
                        <Checkbox
                          sx={{
                            color: 'rgba(17, 17, 17, 0.4)',
                          }}
                        />
                      }
                      label="Remember Me"
                      // labelPlacement="top"
                      sx={{
                        color: 'rgba(17, 17, 17, 0.4)',
                        padding: '0 !important',
                      }}
                    />
                  </Box>
                  <Box>
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
                      Login
                    </Button>
                  </Box>
                </form>
                <Typography
                  variant="p"
                  sx={{
                    color: 'rgba(17, 17, 17, 0.4)',
                    fontSize: '14px',
                    marginTop: '1.2vw',
                    display: 'inline-block',
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#7B42F6',
                    },
                  }}
                  onClick={() => {
                    navigate('/forgetpassword')
                  }}
                >
                  Forgot your password?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px',
                    marginTop: '2vw',
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      color: 'rgba(17, 17, 17, 0.4)',
                      fontSize: '14px',
                      marginTop: '1.2vw',
                      display: 'inline-block',
                    }}
                  >
                    Or login with
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      color: '#7B42F6',
                      fontSize: '14px',
                      marginTop: '1.2vw',
                      display: 'inline-block',
                      cursor: 'pointer',
                    }}
                  >
                    Google
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      color: '#7B42F6',
                      fontSize: '14px',
                      marginTop: '1.2vw',
                      display: 'inline-block',
                      cursor: 'pointer',
                    }}
                  >
                    Outlook
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
