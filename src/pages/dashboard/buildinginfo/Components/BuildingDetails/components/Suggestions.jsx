import React, { useEffect, useState } from 'react'
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
} from '@mui/material'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { BuildingPrimaryEnergySkeleton } from '../../../../../../components/Skeleton'
import { useDispatch, useSelector } from 'react-redux'

const Suggestions = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])
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
                overflowY: 'auto',
                '&::-webkit-scrollbar': { width: '6px' },
                '&::-webkit-scrollbar-thumb': {
                  borderRadius: '10px',
                  backgroundColor: '#D9D9D9',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: '#D9D9D9',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'rgba(17, 17, 17, 1)',
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
                  color: 'rgba(17, 17, 17, 0.6)',
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                Detected problems:
              </Typography>
              <Box
                sx={{
                  marginBottom: 2,
                  background: '#FFEAEB',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0px 12px',
                  color: '#FA3D45',
                  borderRadius: '6px',
                  borderLeft: '4px solid #FA3D45',
                  fontSize: '16px',
                  lineHeight: '24px',
                }}
              >
                Heating - 1 sensor has problem
              </Box>

              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: 'rgba(17, 17, 17, 0.6)',
                  marginBottom: 1,
                }}
              >
                ML Suggestions
              </Typography>
              <List sx={{ width: '100%', bgcolor: '', marginBottom: 1 }}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      bgcolor: '#F5F7FB',
                      marginBottom: 1,
                    }}
                    key={index}
                  >
                    <ListItemIcon>
                      <AcUnitIcon />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        component: 'div',
                        style: { display: 'flex', alignItems: 'center' },
                      }}
                      primary={`Extra suggestion ${index + 1}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default Suggestions
