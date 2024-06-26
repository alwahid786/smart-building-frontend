import { useNavigate, useParams } from 'react-router-dom'

import loginBg from '../../asset/Images/login/LogIn2.png'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LightBox from '../../asset/svgs/LightBox'
import Typography from '@mui/material/Typography'
import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { resetPassSchema } from '../../schema'
import { useResetPasswordMutation } from '../../redux/api/authApi'
import { toast } from 'react-toastify'

const ResetPassword = () => {
  const [resetPassword] = useResetPasswordMutation()
  const navigate = useNavigate()
  const token = useParams().token;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { newpassword: '', confirmpassword: '' },
      validationSchema: resetPassSchema,
      onSubmit: async (values, actions) => {
     
        const res = await resetPassword({newpassword: values.newpassword, token: token});

          console.log(values, 'values')

        // if error show error
        if (res.error) {
          toast.error(res.error.data.message)
        }

        // if success show success
        if (res.data) {
          toast.success(res.data.message)

          setTimeout(() => {
            navigate('/dashboard')
          }, 1000)
        }

        // Reset the form
        actions.resetForm()
      },
    })

  return (
    <>
      {/* {isLoading && <GlobalLoader />} */}
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
                  Reset Password
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
                  Ensure that both fields match to successfully reset your
                  password. Once done, you will regain access to your account
                  securely.
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
                Reset Password
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
                  Please enter your new password and confirm it below.
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
                      New Password
                    </Typography>
                    <TextField
                      size="small"
                      type="password"
                      placeholder="New Password"
                      name="newpassword"
                      value={values.newpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.newpassword && Boolean(errors.newpassword)}
                      helperText={touched.newpassword && errors.newpassword}
                    />
                  </Box>

                  <Box
                    style={{
                      marginTop: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                    }}
                  >
                    <Typography
                      variant="label"
                      sx={{ fontSize: { xs: '12px', md: '14px', xl: '16px' } }}
                    >
                      Confirm New Password
                    </Typography>
                    <TextField
                      size="small"
                      type="password"
                      placeholder="Confirm New Password"
                      name="confirmpassword"
                      value={values.confirmpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.confirmpassword &&
                        Boolean(errors.confirmpassword)
                      }
                      helperText={
                        touched.confirmpassword && errors.confirmpassword
                      }
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
                      marginTop: '0.8vw',
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

export default ResetPassword
