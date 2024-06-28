import { Box, Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import CardBg from '../../../../asset/Images/list/image.png'
import AddLg from '../../../../asset/svgs/AddLg'
import { Link } from 'react-router-dom'

const AddCard = () => {
  return (
    <Card
      sx={{
        cursor: 'pointer',
        maxWidth: '300px',
        minHeight: '242px',
        position: 'relative',
        borderRadius: '10px',
        boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <CardContent
        sx={{
          p: { xs: 1, md: 2 },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h4>Add Building</h4>
        <Link to="/dashboard/addbuilding">
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <AddLg />
          </Box>
          <Box sx={{ position: 'absolute', bottom: '0', right: '0' }}>
            <img src={CardBg} style={{ width: '218px', height: '124px' }} />
          </Box>
        </Link>
      </CardContent>
    </Card>
  )
}

export default AddCard
