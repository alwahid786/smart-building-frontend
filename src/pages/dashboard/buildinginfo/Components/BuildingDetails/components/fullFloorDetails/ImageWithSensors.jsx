import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardMedia,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import defaultImage from '../../../../../../../asset/Images/list/Rectangle.png';

const ImageWithSensors = ({ data }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [floorImage, setFloorImage] = useState(defaultImage);

  useEffect(() => {
    if (data && data.length > 0) {
      const initialCheckedItems = {};
      data.forEach((item, index) => {
        initialCheckedItems[`item${index + 1}`] = false;
      });
      setCheckedItems(initialCheckedItems);
      setFloorImage(data[0].floorImage || defaultImage); // Assuming you want to show the first image initially
    }
  }, [data]);

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Card
      sx={{
        minWidth: 0,
        position: 'relative',
        borderRadius: '10px',
        height: '100%',
        mb: 2,
        '&:hover': {
          '& .showButton': {
            bottom: '3%',
          },
          '& .showHeart': {
            right: '2%',
          },
        },
      }}
    >
      <CardMedia
        component="img"
        image={floorImage}
        alt="Featured Image"
        className="imageEffect"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          boxShadow: '0px 4px 2px 0px rgba(0, 0, 0, 0.12)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Accordion sx={{ width: '100%' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#7B42F6' }} />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ color: '#7B42F6' }}
          >
            <Typography sx={{ color: '#7B42F6' }}>Sensor List</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {data?.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedItems[`item${index + 1}`]}
                        onChange={handleChange}
                        name={`item${index + 1}`}
                      />
                    }
                    label={`Item ${index + 1}`}
                  />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Card>
  );
};

export default ImageWithSensors;
