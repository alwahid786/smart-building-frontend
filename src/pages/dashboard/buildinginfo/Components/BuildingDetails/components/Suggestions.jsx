import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Box,
  Divider,
} from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { BuildingPrimaryEnergySkeleton } from "../../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../../features/loading/loadingSlice";

const Suggestions = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <BuildingPrimaryEnergySkeleton />
      ) : (
        <Card
          sx={{
            minWidth: 275,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Box
              sx={{
                maxHeight: 300,
                overflowY: "auto",
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: "10px",
                  backgroundColor: "#D9D9D9",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#D9D9D9",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "rgba(17, 17, 17, 1)",
                  marginBottom: 1,
                }}
              >
                Primary energy
              </Typography>
              <Divider />
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: "rgba(17, 17, 17, 0.6)",
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Detected problems:
              </Typography>
              <Alert severity="error" sx={{ marginBottom: 2 }}>
                Heating - 1 sensor has problem
              </Alert>

              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: "rgba(17, 17, 17, 0.6)",
                  marginBottom: 1,
                }}
              >
                ML Suggestions
              </Typography>
              <List sx={{ width: "100%", bgcolor: "", marginBottom: 1 }}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      bgcolor: "rgba(245, 247, 251, 1)",
                      marginBottom: 1,
                    }}
                    key={index}
                  >
                    <ListItemIcon>
                      <AcUnitIcon />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        component: "div",
                        style: { display: "flex", alignItems: "center" },
                      }}
                      primary={`Extra suggestion ${index + 1}`}
                      secondary={`+${index + 1}%`}
                      secondaryTypographyProps={{
                        component: "span",
                        style: { marginLeft: 8 },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Suggestions;
