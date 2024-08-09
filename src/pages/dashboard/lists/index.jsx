import { Box, Grid, Typography } from '@mui/material';
import BuildingStatus from './Components/BuildingStatus';
import FilterBar from './Components/FilterBar';
import ListCard from './Components/ListCard';
import AddCard from './Components/AddCard';
import { useEffect, useRef, useState } from 'react';
import { useSearchBuildingsQuery } from '../../../redux/api/buildingApi';

const List = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [range, setRange] = useState('');
  const scrollContainerRef = useRef(null);

  // API call to search buildings
  const { data: filteredBuildings = [], error, isLoading } = useSearchBuildingsQuery({ searchTerm, range });
  const buildingLength = filteredBuildings?.length;

  // Handle scrolling for sticky header
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

      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const onFilterChange = (filter) => {
    setRange(filter.range);
  };

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
          <FilterBar 
            onSearchTermChange={handleSearchTermChange}
            onFilterChange={onFilterChange}
          />
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
            
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80%',
                width: '100%',
                fontSize: '1.3rem',
              }}
            >
              {error?.data?.message}  

            </Typography>
          ) : filteredBuildings.length === 0 ? (
            <AddCard />
          ) : (
            <Grid container spacing={2}>
              {filteredBuildings.map((building) => {

                return (
                  <Grid item xs={12} sm={12} md={6} lg={4} key={building?.buildingInfo?._id}>
                    <ListCard
                      imageUrl={building?.buildingInfo?.images[0] || null}
                      subtitle={building?.buildingInfo
                        ?.ownerName}
                      status="Status Example"
                      title={building?.buildingInfo
                        ?.buildingName}
                      tags={building?.buildingInfo
                        ?.ownerName}
                      numberOfFloors={building?.buildingInfo
                        ?.numberOfFloors}
                      totalArea={building?.buildingInfo
                        ?.totalArea}
                      buildingId={building?.buildingInfo
                        ?._id}
                      actionText="See Details"
                      sensorCount={building?.sensors?.length}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Box>
    </>
  );
};

export default List;
