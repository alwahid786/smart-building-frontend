import { Box, Grid } from '@mui/material'
import BuildingStatus from './Components/BuildingStatus'
import FilterBar from './Components/FilterBar'
import ListCard from './Components/ListCard'
import { useEffect, useRef, useState } from 'react'
import AddCard from './Components/AddCard'
import { useGetBuildingQuery } from '../../../redux/api/buildingApi'

const List = () => {
  
  const [isSticky, setIsSticky] = useState(false)
  const scrollContainerRef = useRef(null)

  // API call using useGetBuildingQuery hook
  const { data: buildingData, error, isLoading } = useGetBuildingQuery()

  const buildingLength = buildingData?.length

  // Handle scrolling
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop
      setIsSticky(scrollTop > 100)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, {
        passive: true,
      })

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <>
      {!isSticky && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <Box
            sx={{
              background: '#FFFFFF',
              borderRadius: '6px',
              padding: '5px 20px',
            }}
          >
            <BuildingStatus buildingLength={buildingLength} />
          </Box>
        </Box>
      )}

      <Box
        sx={{
          background: '#FFFFFF',
          borderRadius: '14px',
          p: { lg: 2, xl: 4 },
          opacity: 0,
          transform: 'translateY(20px)',
          animation: 'fadeInUp 2s ease forwards',
          '@keyframes fadeInUp': {
            '0%': {
              opacity: 0,
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            position: isSticky ? 'sticky' : 'relative',
            top: 0,
            zIndex: 1100,
            backgroundColor: 'inherit',
            mt: isSticky ? { xs: '26px', lg: '6px' } : 0,
            mb: isSticky ? { xs: 0, lg: '10px' } : 0,
          }}
        >
          <FilterBar />
        </Box>
        <Box
          ref={scrollContainerRef}
          sx={{
            p: 0,
            marginTop: 1,
            overflowY: 'auto',
            height: {
              xs: isSticky ? '80vh' : '50vh',
              sm: '55vh',
              md: '60vh',
              lg: isSticky ? '88vh' : '78vh',
            },
            width: '100%',
            '&::-webkit-scrollbar': { width: 8, borderRadius: '50%' },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
              borderRadius: '50%',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(217, 217, 217, 1)',
              borderRadius: '50%',
              backgroundClip: 'content-box',
            },
            '&::-webkit-scrollbar-thumb:hover': { background: '#007BFF' },
            'scrollbar-color': 'rgba(217, 217, 217, 1) transparent',
            'scrollbar-width': 'thin',
          }}
        >
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error loading data.</p>
          ) : buildingData?.length === 0 ? (
            <AddCard />
          ) : (
            <Grid container spacing={2}>
              {buildingData.map((building) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  // xl={3}
                  key={building.id}
                >
                    <ListCard
                      imageUrl={
                        building.images.length > 0
                          ? building.images[0]
                          : 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      }
                      subtitle={building.ownerName}
                      status={'status'}
                      title={building.buildingName}
                      tags={String(building.totalArea)}
                      numberOfFloors={building.numberOfFloors}
                      totalArea={building.totalArea}
                      buildingId={building._id}
                      actionText={'See Details'}
                    />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </>
  )
}

export default List
