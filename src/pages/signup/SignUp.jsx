import React, { useState } from "react";
import loginbg from "../../asset/Images/login/LogIn2.png";
import ContainerFluid from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LightBox from "../../asset/svgs/LightBox";
import FormBox from "../../asset/svgs/FormBox";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <ContainerFluid
        maxWidth="false"
        sx={{
          height: {
            xl: "100vh",
          },
          padding: {
            xs: "0 !important",
            md: "0 0 !important",
            backgroundImage: `url(${loginbg})`,
            backgroundPosition: "100% 0%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            // height: '100vh',
            // bgcolor: '#fff',
            margin: "0 !important",
            width: "100% !important",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              pl: "6vw !important",
              color: "#fff",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                pt: "4vw",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <LightBox />
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "20px",
                    md: "30px",
                  },
                  fontWeight: "600",
                }}
              >
                Smart
                <br />
                Building
              </Typography>
            </Box>
            <Box sx={{ pt: "4.5vw" }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "30px",
                    lg: "40px",
                  },
                  fontWeight: "600",
                }}
              >
                Sign In to <br />
                Smart Building
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "20px",
                  },
                  width: {
                    sm: "100%",
                    md: "80%",
                  },
                  display: "inline-block",
                }}
              >
                it is a long established fact that a reader will be distracted
                by the readable content of a page
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              // bgcolor: '#fff',
              p: "0 !important",
            }}
          >
            <Box
              sx={{
                bgcolor: "#fff",
                boxShadow: "0px 4px 94px 0px rgba(0, 0, 0, 0.19)",
                borderRadius: {
                  xs: "0px",
                  sm: "0px",
                },
                position: "relative",
                padding: "7vw 4vw",
                height: {
                  xs: "100%",
                  sm: "100%",
                },
                m: "0",
                // p: '3vw',
                "@media (min-width:900px)": {
                  m: "3vw 3vw 3vw -4.1vw",
                  p: "5vw 6vw",
                  borderRadius: "20px",
                  height: "88%",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              >
                <FormBox />
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "20px",
                    md: "24px",
                  },
                  fontWeight: "600",
                  color: "rgba(17, 17, 17, 1)",
                  lineHeight: {
                    xs: "26px",
                    md: "36px",
                  },
                }}
              >
                Welcome To
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "20px",
                    md: "24px",
                  },
                  fontWeight: "600",
                  color: "rgba(123, 66, 246, 1)",
                  lineHeight: {
                    xs: "26px",
                    md: "36px",
                  },
                }}
              >
                Digital Building Passport
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xs: "14px",
                    md: "16px",
                  },
                  color: "rgba(17, 17, 17, 0.6)",
                  margin: "0",
                  lineHeight: "28px",
                }}
              >
                We make it easy for everyone to monitor your building status.
              </Typography>
              {/* form */}
              <Box
                style={{
                  marginTop: "2vw",
                  position: "relative",
                  zIndex: "1",
                }}
              >
                <form>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <label>First Name</label>
                      <Input type={"text"} placeholder={"First name"} />
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <label>Last Name</label>
                      <Input type={"text"} placeholder={"Last name"} />
                    </Box>
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <label>Email</label>
                    <Input type={"text"} placeholder={"Email name"} />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "1vw",
                    }}
                  >
                    <label>Password</label>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "1vw",
                    }}
                  >
                    <label>Confirm Password</label>
                    <Input type={"password"} placeholder={"Confirm Password"} />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        md: "row",
                      },
                      gap: "10px",
                      marginTop: "0.8vw",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        md: "row",
                      },
                      gap: "10px",
                      marginTop: "0.8vw",
                    }}
                  >
                    <Button
                      text={"Sign Up"}
                      textColor={"rgba(255, 255, 255, 1)"}
                      bgColor={
                        "linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)"
                      }
                      border-image-source={
                        "linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)"
                      }
                      border={"2px solid"}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      //   marginTop: "2vw",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{
                        color: "rgba(17, 17, 17, 0.4)",
                        fontSize: "14px",
                        // marginTop: "1.2vw",
                        display: "inline-block",
                      }}
                    >
                      Already Have Account ?
                    </Typography>
                    <Typography
                      variant="body2"
                      onClick={handleLoginClick}
                      sx={{
                        color: "rgba(12, 35, 77, 1)",
                        fontSize: "14px",
                        // marginTop: "1.2vw",
                        display: "inline-block",
                        cursor: "pointer",
                      }}
                    >
                      Login
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "32px",
                      marginTop: "2vw",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{
                        color: "rgba(17, 17, 17, 0.4)",
                        fontSize: "14px",
                        marginTop: "1.2vw",
                        display: "inline-block",
                      }}
                    >
                      Or login with
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "rgba(12, 35, 77, 1)",
                        fontSize: "14px",
                        marginTop: "1.2vw",
                        display: "inline-block",
                        cursor: "pointer",
                      }}
                    >
                      Google
                    </Typography>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ContainerFluid>
    </>
  );
};

export default SignUp;
