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
          backgroundImage: `url(${loginBg})`,
          backgroundPosition: '100% 0%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 2, md: 4 }, // Add padding for better spacing
        }}
      >
        <Grid
          container
          spacing={2} // Space between the columns
          sx={{
            maxWidth: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for laptops and up
          }}
        >
          {/* Left side: Information */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              color: '#fff',
              display: {md:'flex', sm:'none', xs:'none'},
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left-align on desktop
              padding: { xs: 2, md: 4 },
              
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '34px',
                marginBottom: '2vw',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' }, // Center icons on mobile
              }}
            >
              <LightBox />
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: '24px',
                    sm: '30px',
                    md: '40px',
                  },
                  fontWeight: '600',
                  lineHeight: '40px',
                  letterSpacing: '3px',
                }}
              >
                Smart
                <br />
                Buildings
              </Typography>
            </Box>
            <Box>
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
                  margin: '0 auto',
                }}
              >
                Ensure that both fields match to successfully reset your password. Once done, you will regain access to your account securely.
              </Typography>
            </Box>
          </Grid>

          {/* Right side: Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                borderRadius: '18px',
                bgcolor: '#fff',
                boxShadow: '0px 4px 94px 0px rgba(0, 0, 0, 0.19)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: { xs: '100%', sm: '80%', md: '70%' }, // Responsive width
                maxWidth: '500px', // Maximum width constraint
                padding: {
                  xs: '20px',
                  sm: '40px',
                },
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
