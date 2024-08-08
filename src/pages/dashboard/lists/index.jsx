import { Box, Grid } from '@mui/material';
import BuildingStatus from './Components/BuildingStatus';
import FilterBar from './Components/FilterBar';
import ListCard from './Components/ListCard';
import { useEffect, useRef, useState } from 'react';
import AddCard from './Components/AddCard';
import { useGetBuildingQuery } from '../../../redux/api/buildingApi';

const List = () => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef(null);

  // API call using useGetBuildingQuery hook
  const { data: buildingData, error, isLoading } = useGetBuildingQuery();

  const buildingLength = buildingData?.length;

  // Handle scrolling
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      setIsSticky(scrollTop > 100);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, {
        passive: true,
      });

      return () => {scrollContainer.removeEventListener('scroll', handleScroll)};
    }
  }, []);

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
        }}
      >
        <Box
          className="fadeInUp"
          sx={
            {
              // border: '1px solid red',
              // animation: 'fadeInUp 2s ease forwards',
              // '@keyframes fadeInUp': {
              //   '0%': {
              //     transform: 'translateY(100vh)',
              //   },
              //   '100%': {
              //     transform: 'translateY(0)',
              //   },
              // },
            }
          }
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
                {buildingData?.map((building) => (
                  <Grid item xs={12} sm={12} md={6} lg={4} key={building?.buildingId?._id}>
                    <ListCard
                      imageUrl={building?.buildingId?.images[0]}
                      subtitle={building?.buildingId?.ownerName}
                      status="Status Example"
                      title={building?.buildingId?.buildingName}
                      tags={building?.buildingId?.ownerName}
                      numberOfFloors={building?.buildingId?.numberOfFloors}
                      totalArea={building?.buildingId?.totalArea}
                      buildingId={building?.buildingId?._id}
                      actionText="See Details"
                      sensorCount={building?.sensors?.length}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default List;
