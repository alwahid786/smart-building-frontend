import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LightBox from '../../asset/svgs/LightBox'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { forgetPassSchema } from '../../schema'
import { useFormik } from 'formik'
import loginBg from '../../asset/Images/login/LogIn2.png'
import { TextField, Button } from '@mui/material'
import { useForgetPasswordMutation } from '../../redux/api/authApi';
import { toast } from 'react-toastify'

const ForgetPassword = () => {
  const navigate = useNavigate()
  const [forgetPassword] = useForgetPasswordMutation()

  const initialValues = {email: ''}

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgetPassSchema,
      onSubmit: async(values, action) => {
        
        const res = await forgetPassword({email: values.email})

        if(res.data.success === true){

          toast.success(res.data.message)
          action.resetForm()

        }else{

          toast.error(res.data.message)
        }
      },
    })
  return (
    <>
      <Box
        maxWidth="false"
        sx={{
          height: '100vh',
          // height: {
          //   xl: '100vh',
          // },
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
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '34px',
                  marginBottom: '2vw',
                  // flexGrow: '1',
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
                    lineHeight: '30px',
                    letterSpacing: '3px',
                  }}
                >
                  Smart
                  <br />
                  Buildings
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                  Enter your email address to reset your password. it only takes
                  a few moments, and you will be back into your account in no
                  time.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: '0 !important',
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                // height: {
                //   sm: 'auto',
                //   md: '40vh',
                // },
                borderRadius: '18px',
                bgcolor: '#fff',
                boxShadow: '0px 4px 94px 0px rgba(0, 0, 0, 0.19)',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: { xs: '300px', md: '400px', lg: '500px' },
                padding: {
                  xs: '20px',
                  sm: '40px',
                },

                // height: { xs: '100vh', md: 'auto' },
                // position: 'relative',
                // padding: '7vw 4vw',
              }}
            >
              <Typography
                variant="body2"
                onClick={() => navigate('/login')}
                sx={{
                  color: '#5915E3',
                  fontSize: '36px',
                  marginBottom: '1.2vw',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              >
                ←
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
                Forget Password
              </Typography>

              <Box>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '28px',
                  }}
                >
                  Enter your email to receive an OTP for password reset.
                </Typography>
              </Box>

              <Box
                style={{
                  marginTop: '2vw',
                  position: 'relative',
                  zIndex: '1',
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                    }}
                  >
                    <Typography
                      variant="label"
                      sx={{ fontSize: { xs: '12px', md: '14px', xl: '16px' } }}
                    >
                      Email
                    </Typography>
                    <TextField
                      size="small"
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
                    sx={{
                      display: 'flex',
                      flexDirection: {
                        xs: 'column',
                        md: 'row',
                      },
                      gap: '10px',
                      marginTop: '10px',
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: {
                        xs: 'column',
                        md: 'row',
                      },
                      gap: '10px',
                      // marginTop: '0.8vw',
                    }}
                  >
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
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  ></Box>
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
