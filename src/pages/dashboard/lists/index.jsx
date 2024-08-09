import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import BuildingStatus from './Components/BuildingStatus';
import FilterBar from './Components/FilterBar';
import ListCard from './Components/ListCard';
import AddCard from './Components/AddCard';
import { useEffect, useRef, useState, useMemo } from 'react';
import { useSearchBuildingsQuery } from '../../../redux/api/buildingApi';

const List = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [range, setRange] = useState('');
  const [startYear, setStartYear] = useState('');  // Start year state
  const [endYear, setEndYear] = useState('');      // End year state

  const scrollContainerRef = useRef(null);

  // API call to search buildings with year filter
  const { data: filteredBuildings = [], error, isLoading } = useSearchBuildingsQuery({
    searchTerm,
    range,
    startYear,  // Include start year filter
    endYear,    // Include end year filter
  });

  const buildingLength = useMemo(() => filteredBuildings?.length, [filteredBuildings]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, {
        passive: true,
      });

      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current.scrollTop > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const onFilterChange = (filter) => {
    if (filter.range) setRange(filter.range);
    if (filter.startYear) setStartYear(filter.startYear);  // Update start year filter
    if (filter.endYear) setEndYear(filter.endYear);        // Update end year filter
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
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <CircularProgress />
            </Box>
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
              {error?.data?.message || 'An error occurred. Please try again later.'}
            </Typography>
          ) : filteredBuildings.length === 0 ? (
            <AddCard />
          ) : (
            <Grid container spacing={2}>
              {filteredBuildings.map((building) => (
                <Grid item xs={12} sm={12} md={6} lg={4} key={building?.buildingInfo?._id}>
                  <ListCard
                    imageUrl={building?.buildingInfo?.images[0] || null}
                    subtitle={building?.buildingInfo?.ownerName}
                    status="Status Example"
                    title={building?.buildingInfo?.buildingName}
                    tags={building?.buildingInfo?.ownerName}
                    numberOfFloors={building?.buildingInfo?.numberOfFloors}
                    totalArea={building?.buildingInfo?.totalArea}
                    buildingId={building?.buildingInfo?._id}
                    actionText="See Details"
                    sensorCount={building?.sensors?.length}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </>
  );
};

export default List;
