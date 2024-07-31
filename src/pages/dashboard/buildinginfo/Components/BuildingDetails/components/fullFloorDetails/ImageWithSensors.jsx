import React, { useState } from 'react'
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
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import image from '../../../../../../../asset/Images/list/Rectangle.png'

const ImageWithSensors = () => {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
  })

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    })
  }

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked
    setCheckedItems({
      item1: isChecked,
      item2: isChecked,
    })
  }

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
        image={image}
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
            {/* <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.item1 && checkedItems.item2}
                  indeterminate={checkedItems.item1 !== checkedItems.item2}
                  onChange={handleSelectAll}
                />
              }
              label="Select All"
            /> */}
            <Typography sx={{ color: '#7B42F6' }}>Sensor List</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedItems.item1}
                      onChange={handleChange}
                      name="item1"
                    />
                  }
                  label="Item 1"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedItems.item2}
                      onChange={handleChange}
                      name="item2"
                    />
                  }
                  label="Item 2"
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Card>
  )
}

export default ImageWithSensors
