import { Box } from "@mui/material";
import LoaderBox from "../asset/svgs/LoaderBox";

const GlobalLoader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1500,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* <CircularProgress /> */}
      <LoaderBox />
    </Box>
  );
};

export default GlobalLoader;
