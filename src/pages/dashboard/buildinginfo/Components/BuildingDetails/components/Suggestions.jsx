import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { BuildingPrimaryEnergySkeleton } from '../../../../../../components/Skeleton'
import Lighting from '../../../../../../asset/svgs/buildingdetails/Lighting'
import Heating from '../../../../../../asset/svgs/buildingdetails/Heating'

const Suggestions = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const suggestionList = [
    // { title: 'lighting', number: '+5%' },
    // { title: 'heating', number: '+9%' },
  ]
  // 'Heating', 'Lighting'
  const problems = []
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
            height: '100%',
          }}
        >
          <CardContent>
            <Box
              sx={{
                maxHeight: 370,
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
                  marginBottom: 2,
                }}
              >
                Analytics
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

              {problems.length === 0 ? (
                <Box
                  sx={{
                    marginBottom: 2,
                    background: '#c5fabe90',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0px 12px',
                    color: '#378a2c',
                    borderRadius: '6px',
                    borderLeft: '4px solid #378a2c',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '600',
                  }}
                >
                  No Problem Detected
                </Box>
              ) : (
                problems.map((problem, index) => {
                  return (
                    <Box
                      key={index}
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
                      {problem} -{' '}
                      <Typography style={{ fontWeight: '600' }}>
                        1 sensor &nbsp;
                      </Typography>{' '}
                      has problem
                    </Box>
                  )
                })
              )}

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
                {suggestionList.length === 0 ? (
                  <ListItem
                    sx={{
                      width: '100%',
                      bgcolor: '#F5F7FB',
                      marginBottom: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        component: 'div',
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '16px',
                          color: '#111111',
                          fontWeight: '600',
                        }}
                      >
                        Everything is working fine
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ) : (
                  suggestionList.map((suggestion, index) => {
                    return (
                      <ListItem
                        sx={{
                          width: '100%',
                          bgcolor: '#F5F7FB',
                          marginBottom: 1,
                        }}
                        key={index}
                      >
                        <ListItemIcon>
                          {suggestion.title === 'lighting' ? (
                            <Lighting />
                          ) : (
                            <Heating />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            component: 'div',
                            style: {
                              display: 'flex',
                              alignItems: 'start',
                              justifyContent: 'start',
                            },
                          }}
                        >
                          <Typography
                            sx={{ fontSize: '13px', color: '#111111' }}
                          >
                            New{' '}
                            <span style={{ fontWeight: '600' }}>
                              {suggestion.title}
                            </span>{' '}
                            suggestions{' '}
                            <span style={{ color: '#7B42F6' }}>
                              {suggestion.number}
                            </span>
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    )
                  })
                )}
              </List>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default Suggestions
