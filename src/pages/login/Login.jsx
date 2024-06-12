import { useNavigate } from 'react-router-dom'

import loginbg from '../../asset/Images/login/LogIn2.png'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LightBox from '../../asset/svgs/LightBox'

import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import CheckBox from '../../asset/svgs/CheckBox'
import CheckedBox from '../../asset/svgs/CheckedBox'
import { Button, TextField } from '@mui/material'
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
      {/* {isLoading && <GlobalLoader />} */}
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
        <Grid container>
          <Grid
            item
            md={6}
            xs={12}
            padding="50px"
            display={{ xs: 'none', md: 'block' }}
          >
            <Box
              sx={{
                color: '#fff',
                height: '100vh',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '34px' }}>
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
              <Box sx={{ marginTop: '150px' }}>
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
          <Grid item md={6} xs={12} padding={{ xs: '20px', md: '50px' }}>
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
                <form>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <label>Name</label>
                    <TextField
                      type="text"
                      placeholder="Your name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
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
                      marginTop: '1vw',
                    }}
                  >
                    <Checkbox
                      icon={<CheckBox />}
                      checkedIcon={<CheckedBox />}
                      sx={{
                        color: 'rgba(17, 17, 17, 0.2)',
                        padding: '0 !important',
                      }}
                    />
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(17, 17, 17, 0.4)',
                      }}
                    >
                      Remember me
                    </p>
                  </Box>
                  <Box>
                    <Button
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
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
