/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
  Divider,
} from '@mui/material'
import Delete from '../../../../../../asset/svgs/selfregulation/Delete'
import { useDispatch } from 'react-redux'
const InfoCard = ({
  img: Img,
  title,
  text,
  description,
  actionText,
  percentage,
  onActionClick,
}) => {
  const dispatch = useDispatch()
  const [isPurple, setIsPurple] = useState(false)
  const handleTogglePreview = () => {
    // dispatch(toggleSecondBar())
    setIsPurple(!isPurple)
  }

  return (
    <Card sx={{ minWidth: 275, margin: 2, boxShadow: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          p: 2,
          background: isPurple
            ? 'linear-gradient(45deg, #5915E3 0%, #B029FC 100%)'
            : '',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {Img && <Img />}
          <Typography
            sx={{
              color: isPurple ? 'white' : 'rgba(17, 17, 17, 0.6)',
              fontWeight: 400,
              fontSize: { xs: 12, md: 16 },
            }}
          >
            {title}
          </Typography>
        </Box>
        {isPurple && (
          <Button
            variant="contained"
            sx={{ color: 'black', background: 'white' }}
          >
            Preview
          </Button>
        )}
      </Box>
      <Divider />
      <CardContent>
        <Typography
          sx={{
            fontSize: { xs: 12, md: 16 },
            fontWeight: 500,
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          {text}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, m: 2 }}>
          <Typography
            sx={{
              fontSize: { xs: 14, md: 20 },
              fontWeight: 600,
              color: 'rgba(123, 66, 246, 1)',
              background: '#F5F7FB',
              padding: '5px 20px',
            }}
          >
            {percentage}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 14,
              color: 'rgba(17, 17, 17, 0.6)',
            }}
            color="text.secondary"
          >
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
            m: 2,
          }}
        >
          <Box>
            <Button
              size="small"
              sx={{ background: 'none' }}
              onClick={onActionClick}
            >
              <Delete />{' '}
            </Button>
          </Box>
          <Box>
            <Button
              size="small"
              onClick={handleTogglePreview}
              sx={{
                color: isPurple
                  ? 'rgba(123, 66, 246, 1)'
                  : 'rgba(17, 17, 17, 0.6)',
                background: 'none',
                fontWeight: 400,
                fontSize: 14,
                textTransform: 'none',
              }}
            >
              {isPurple ? 'Cancel' : 'Preview'}
            </Button>
            <Button
              size="small"
              onClick={onActionClick}
              sx={{
                color: 'rgba(123, 66, 246, 1)',
                background: 'none',
                fontWeight: 400,
                fontSize: 14,
              }}
            >
              {actionText}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default InfoCard
