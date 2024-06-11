import { Box, Card, CardContent,Grid,styled ,CardMedia,IconButton,List,ListItemText, ListItemIcon,ListItem, Paper, Stack,Typography, Divider,Table, TableBody, TableCell, TableRow, TableHead, TableContainer, Button,} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  borderRadius:'10px',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexGrow: 1,
  transition: 'border-bottom 0.1s ease-in-out', 
  '&:hover': {
    borderBottom: '4px solid #7B42F6',  
  }
}));
export const BuildingStatusSkeleton = () => (
  <Box
    sx={{
      flexGrow: 1,
      p: { xs: 1, md: 0 },
      display: "flex",
      marginTop: "2rem",
      marginBottom: { xs: 0, md: 2 },
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      gap: { xs: 1, md: 4 },
    }}
  >
    <Skeleton variant="text" width="20%" height={40} animation="wave" />
    <Skeleton variant="rectangular" width="15%" height={20} animation="wave" />
    <Skeleton variant="rectangular" width="15%" height={20} animation="wave" />
    <Skeleton variant="rectangular" width="15%" height={20} animation="wave" />
    <Skeleton variant="rectangular" width="20%" height={20} animation="wave" />
  </Box>
);

export const CardSkeleton = () => (
  <Card
    sx={{
      minWidth: 0,
      height: 430,
      position: "relative",
      mb: 2,
      transition: "border-bottom 0.1s",
    }}
  >
    <Skeleton
      variant="rectangular"
      width="100%"
      height={140}
      animation="wave"
    />
    <Box
      sx={{
        position: "absolute",
        top: 10,
        left: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Skeleton
        variant="rectangular"
        width={43}
        height={20}
        sx={{ borderRadius: "4px", marginBottom: 1 }}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        width={23}
        height={20}
        sx={{ borderRadius: "4px" }}
        animation="wave"
      />
    </Box>
    <CardContent
      sx={{ p: { xs: 1, md: 2 }, display: "flex", flexDirection: "column" }}
    >
      <Skeleton variant="text" width="80%" height={24} animation="wave" />
      <Skeleton variant="text" width="50%" height={30} animation="wave" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: { xs: 1, md: 2 },
        }}
      >
        {Array.from(new Array(3)).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 123,
              height: 58,
              bgcolor: "rgba(245, 247, 251, 1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "left",
              borderRadius: "2px",
              p: 1,
            }}
          >
            <Skeleton variant="text" width="70%" height={22} animation="wave" />
            <Skeleton variant="text" width="90%" height={28} animation="wave" />
          </Box>
        ))}
      </Box>
      <Skeleton
        variant="rectangular"
        width="30%"
        height={36}
        animation="wave"
      />
    </CardContent>
  </Card>
);

export const FilterSkeleton = () => (
  <Box
    sx={{
      flexGrow: 1,
      p: { xs: 1, md: 0 },
      display: "flex",
      marginTop: "2rem",
      marginBottom: { xs: 0, md: 2 },
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      gap: { xs: 1, md: 4 },
    }}
  >
    <Skeleton variant="rectangular" width="100%" height={80} animation="wave" />
  </Box>
);

export const StatusGridSkeleton = () => (
  <Grid container spacing={2} sx={{ height: { md: '100%', lg: '85px' } }}>
    {Array.from(new Array(4)).map((_, index) => ( 
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Item>
        <Box sx={{  display: 'flex', flexDirection: 'column', width:'50%' }}>
          <Skeleton variant="text" width="100%" height={30} animation="wave" />
          <Skeleton variant="text" width="100%" height={34}  animation="wave" />
          </Box>
          <Box sx={{  display: 'flex', flexDirection: 'row' }}>
          <Skeleton variant="circle" width={46} height={46} sx={{ alignSelf: 'center', borderRadius:'50px' }} animation="wave" />
          </Box>

      </Item>
      </Grid>

    ))}
  </Grid>
);

export const InspectionTableSkeleton = ({ isMobile }) => (
  <Card variant="outlined" sx={{ p: 0 }}>
    <Stack
      direction="row"
      justifyContent="left"
      alignItems="center"
      sx={{ p: 1 }}
    >
      <Skeleton variant="text" width="30%" height={24} animation="wave" />
      <Skeleton variant="text" width="20%" height={20} sx={{ marginLeft: '12px' }} animation="wave" />
    </Stack>
    <Divider sx={{ my: 1 }} />
    {Array.from(new Array(3)).map((_, index) => (
      <Grid item xs={12} sx={{
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: 1,
          gap: isMobile ? 2 : 1
        }} key={index}>
        <Box sx={{ display: 'flex', flex: 1, background: '#F5F7FB', alignItems: 'center', padding: '10px' }}>
          <Skeleton variant="circular" width={48} height={48} sx={{ marginRight: 2 }} animation="wave" />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Skeleton variant="text" width={100} height={22} animation="wave" />
            <Skeleton variant="text" width={150} height={18} animation="wave" />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, gap: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', background: '#F5F7FB', alignItems: 'flex-start', padding: '14px 23px 10px 10px' }}>
            <Skeleton variant="text" width={120} height={30} animation="wave" />
            <Skeleton variant="text" width={120} height={30} animation="wave" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', background: '#F5F7FB', padding: '14px 23px 10px 10px', alignItems: 'flex-start' }}>
            <Skeleton variant="text" width={120} height={30} animation="wave" />
            <Skeleton variant="text" width={120} height={30} animation="wave" />
          </Box>
          <Skeleton variant="rectangular" width={24} height={24} animation="wave"/>
        </Box>
      </Grid>
    ))}
  </Card>
);

export const InspectionHistorySkeleton = ({ columns, rowsCount = 5 }) => (
  <Box sx={{ backgroundColor: '#FFFFFF', p: 2, borderRadius: '8px' }}>
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 1,
      flexDirection: { xs: 'column', sm: 'row' },
      paddingX: { xs: '0', sm: '1rem' },
      marginLeft: { xs: '-1rem', sm: '0' },
      marginRight: { xs: '-1rem', sm: '0' }
    }}>
      <Box sx={{ display: 'flex' }}>
        <Skeleton variant="text" width={150} height={24} animation="wave"/>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        width: '100%',
        justifyContent: 'flex-end'
      }}>
        <Skeleton variant="rectangular" width="25%" height={40} animation="wave"/>
        <Skeleton variant="circular" width={40} height={40} animation="wave"/>
        <Skeleton variant="rectangular" width={100} height={40} animation="wave"/>
        <Skeleton variant="text" width={150} height={24} animation="wave"/>
      </Box>
    </Box>
    <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
    <TableContainer sx={{ height: '500px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <Skeleton variant="rectangular" width="100%" height={53} animation="wave"/>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(new Array(rowsCount)).map((_, index) => (
            <TableRow key={index}>
              {Array.from(new Array(columns.length + 1)).map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton variant="text" width="100%" height={53} animation="wave"/>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);


export const CurrentInspectionSkeleton = () => {
  return(
<Card variant="outlined" sx={{ p: { xs: 1, md: 2 } }}>
      <Stack direction="row" justifyContent="left" alignItems="center">
        <Skeleton width="30%" height={24} animation="wave"/>
        <Skeleton width="10%" height={24} sx={{ ml: '12px' }} animation="wave" />
      </Stack>
      <Divider sx={{ my: 1 }} />
      {Array.from(new Array(15)).map((_, index) => (
        <Grid item xs={12} sx={{ p: 0.5 }} key={index}>
          <Card sx={{ display: 'flex', p: 1 }}>
            <Skeleton variant="rectangular" width={{ xs: 80, md: 120 }} height="124px" sx={{ borderRadius: '8px' }} animation="wave"/>
            <CardContent sx={{ flex: 1 }}>
              <Skeleton width="50%" height={28}  animation="wave"/>
              <Skeleton width="70%" height={22} sx={{ my: 0.5 }}  animation="wave"/>
              <Skeleton width="40%" height={22} />
              <Stack direction="row" alignItems="center" spacing={1}>
                <Skeleton width="20%" height={22} animation="wave"/>
                <Skeleton variant="circular" width={24} height={24} animation="wave"/>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Card>
    )
};

const MyLineChartSkeleton = () => {
  return (
    <Skeleton variant="rectangular" width="100%" height={200}  animation="wave"/>
  );
};

export const EnergyUseCardSkeleton = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: 290 }}>
      <Box sx={{ p: { xs: 1, md: 2 }, height: 290 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Skeleton
            variant="text"
            sx={{
              fontWeight: 600,
              fontSize: { xs: 14, md: 16 },
              width: '80px',
              height: '24px'
            }}
            animation="wave"
          />
        </Stack>
        <Divider />
        <Box sx={{ alignItems: "left" }}>
          <MyLineChartSkeleton />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{
            width: { xs: 250, md: 320 },
            height: 32,
            backgroundColor: "#F5F7FB",
            justifyContent: "space-between",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
          p={{ xs: 1, md: 2 }}
        >
          <Skeleton variant="text" width="50px" height="24px"  animation="wave"/>
          <Skeleton variant="text" width="50px" height="24px"  animation="wave"/>
          <Skeleton variant="text" width="50px" height="24px"  animation="wave"/>
          <Skeleton variant="text" width="50px" height="24px" animation="wave" />
        </Box>
      </Box>
    </Card>
  );
};

const HeatingUseGraphSkeleton = () => {
  return (
    <Skeleton variant="rectangular" width="100%" height={200} animation="wave"/>
  );
};

export const HeatingUseSkeleton = () => {
  const dummyData = [1, 2, 3, 4]; 

  return (
    <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: 290 }}>
      <Box sx={{ p: { xs: 1, md: 2 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Skeleton
            variant="text"
            sx={{
              fontWeight: 600,
              fontSize: { xs: 14, md: 16 },
              width: '80px',
              height: '24px'
            }}
          />
        </Stack>
        <Divider />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} sx={{ alignItems: 'center' }}>
            <Grid item xs={6} sx={{ alignItems: 'start' }}>
              <HeatingUseGraphSkeleton />
            </Grid>
            <Grid item xs={6}>
              {dummyData.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: { xs: 14, md: 16 },
                      width: '40px',
                      height: '24px',
                      marginRight: 1
                    }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="rectangular"
                    width={4}
                    height={24}
                    sx={{ marginRight: 1 }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: { xs: 14, md: 16 },
                      width: '60px',
                      height: '24px',
                      marginLeft: 1
                    }}
                    animation="wave"
                  />
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
};


export const MaterialUseSkeleton = () => {
  const dummyCategories = [1, 2, 3, 4]; // Dummy data to render skeletons

  return (
    <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: 290 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Skeleton
            variant="text"
            width="120px"
            height="24px"
            sx={{
              fontWeight: 600,
              fontSize: 16,
              fontFamily: "'Poppins', sans-serif"
            }}
            animation="wave"
          />
        </Stack>
        <Divider />
        <Box sx={{ width: '100%', mt: 1 }}>
          {dummyCategories.map((_, index) => (
            <Stack key={index} direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
              <Skeleton variant="text" width="100px" height="24px" />
              <Box sx={{ width: '100%', position: 'relative' }}>
                <Skeleton variant="rectangular" height={4} sx={{ borderRadius: 5, width: '100%' }}  animation="wave"/>
                <Skeleton
                  variant="text"
                  width="40px"
                  height="16px"
                  sx={{
                    position: 'absolute',
                    top: '-10px',
                    left: 'calc(50% - 20px)', // Center placeholder at 50%
                    color: 'rgba(12, 35, 77, 1)',
                    fontWeight: 400,
                    fontSize: 12,
                    textAlign: 'center',
                    borderRadius: '4px',
                    backgroundColor: 'white',
                    padding: '0 4px',
                    transition: 'left 0.2s ease-out',
                  }}
                  animation="wave"
                />
              </Box>
            </Stack>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export const MediaUseSkeleton = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%' }}>
      <Box sx={{ p: 2 }}>
        <Skeleton
          variant="text"
          width="100px"
          height="24px"
          sx={{
            fontWeight: 600,
            fontSize: 16,
            fontFamily: "'Poppins', sans-serif",
          }}
          animation="wave"
        />
        <Divider />
        <Box sx={{ mt: 2 }}>
          {[1, 2, 3].map((_, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Skeleton variant="circular" width={40} height={40}  animation="wave"/>
                <Box sx={{ width: '100%' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Skeleton variant="text" width="60px" height="20px"  animation="wave"/>
                    <Skeleton variant="text" width="40px" height="20px"  animation="wave"/>
                  </Stack>
                  <Skeleton variant="rectangular" height={4} sx={{ width: '100%', borderRadius: 5, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}  animation="wave"/>
                </Box>
                <Skeleton variant="text" width="40px" height="20px" sx={{ ml: 1 }}  animation="wave"/>
                <Skeleton variant="circular" width={20} height={20} />
              </Stack>
            </Box>
          ))}
          <Box sx={{ mt: 4, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Skeleton variant="rectangular" width="100%" height={30}  animation="wave"/>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};


export const RecentlyInspectedBuildingsSkeleton = () => {
  const skeletonData = [1, 2, 3]; // Dummy data for skeleton

  return (
    <Card variant="outlined" sx={{ overflow: 'auto', }}>
      <Box sx={{ p: { xs: 1, md: 2 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Skeleton
            variant="text"
            width="200px"
            height="24px"
            sx={{
              fontWeight: 600,
              fontSize: { xs: 12, md: 14 },
              color: 'rgba(17, 17, 17, 1)',
              fontFamily: "'Poppins', sans-serif"
            }}
            animation="wave"
          />
          <Skeleton
            variant="text"
            width="80px"
            height="16px"
            sx={{
              fontWeight: 400,
              fontSize: 12,
              color: 'rgba(12, 35, 77, 1)',
              fontFamily: "'Poppins', sans-serif",
              cursor: 'pointer'
            }}
            animation="wave"
          />
        </Stack>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              maxHeight: 31,
              alignItems: 'center',
              p: 1,
              backgroundColor: 'rgba(216, 218, 219, 1)'
            }}
          >
            <Skeleton variant="text" width="30%" height="20px"  animation="wave"/>
            <Skeleton variant="text" width="30%" height="20px" animation="wave" />
            <Skeleton variant="text" width="20%" height="20px"  animation="wave"/>
            <Skeleton variant="text" width="10%" height="20px"  animation="wave"/>
          </Box>
          <Grid container>
            {skeletonData.map((_, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Skeleton variant="text" width="90%" height="20px"  animation="wave"/>
                    <Skeleton variant="text" width="70%" height="16px"  animation="wave"/>
                  </Box>
                  <Skeleton variant="text" width="20%" height="20px"  animation="wave"/>
                  <Skeleton variant="text" width="10%" height="20px" animation="wave" />
                </Box>
                <Divider variant="middle" sx={{ my: 0.5 }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Card>
  );
};

export const BuildingInfoSkeleton = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 0, md: 1 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        gap: { xs: 1, md: 4 },
      }}
    >
      <Typography
        sx={{
          whiteSpace: 'nowrap',
          fontWeight: '400',
          color: 'rgba(17, 17, 17, 0.8)',
          mb: { xs: 0, sm: 0 },
          fontSize: { xs: '16px', sm: '10px', md: '12px', lg: '16px' },
        }}
      >
        <Skeleton
          variant="text"
          width="120px"
          height="20px"
          sx={{ display: { xs: 'inline', sm: 'none' } }}
        />
        <strong>
          <Skeleton variant="text" width="20px" height="20px" />
        </strong>
        <Skeleton variant="text" width="100px" height="20px" />
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: { xs: 'row', sm: 'row' },
          gap: { xs: 1, md: 4 },
          mb: { xs: 2, sm: 0 },
          alignItems: { xs: 'start', md: 'center' },
          fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '14px' },
        }}
      >
        {[1, 2, 3, 4].map((index) => (
          <Box key={index}>
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="text" width="70px" height="16px" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const SensorCardSkeleton = ({ iconsCount = 3 }) => (
  <Card   sx={{
marginBottom:'5px',
    width: "100%",
  }}>
    <CardContent
      sx={{
        display: "flex",
        gap: { xs: 0.5, md: 2 },
        justifyContent: { xs: "justify-between", md: "space-around" },
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ flexBasis: '25%' }}>
        <IconButton>
          <Skeleton variant="circular" width={40} height={40} animation="wave" />
        </IconButton>
      </Box>
      <Box sx={{ flexBasis: '25%' }}>
        <Typography variant="subtitle1">
          <Skeleton width="80%" height={24} animation="wave" />
        </Typography>
        <Typography variant="subtitle1">
          <Skeleton width="60%" height={24} animation="wave" />
        </Typography>
      </Box>
      {Array.from(new Array(iconsCount)).map((_, index) => (
        <Box
          key={index}
          sx={{
            alignItems: "center",
            display: 'flex', 
            flexBasis: '25%',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <IconButton>
            <Skeleton variant="circular" width={40} height={40} animation="wave" />
          </IconButton>
          <Skeleton width={40} height={24} animation="wave" />
        </Box>
      ))}
    </CardContent>
  </Card>
);

export const FinancialCardSkeleton = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "1fr",
        sm: "1fr",
        md: "repeat(3, 1fr)",
      }}
      gap={{ xs: 2, md: 4 }}
      mb={2}
      p={0}
    >
      {Array.from(new Array(3)).map((_, index) => ( 
        <Card key={index} elevation={0}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Skeleton variant="text" width="80%" height={24} />
            <Box sx={{ width: "100%", mt: "auto" }}>
              <Skeleton variant="text" width="70%" height={20} />
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Skeleton variant="text" width="50%" height={20} />
                <Skeleton variant="text" width="20%" height={20} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export const FinancialGraphSkeleton = () => (
  <Card elevation={1} mb={2}>
    <CardContent
      style={{
        width: "100%",
        height: "300px", 
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="100%" />
    </CardContent>
  </Card>
);

export const FinancialTableSkeleton = () => (
  <Card elevation={1}>
    <CardContent>
      <Box overflow="auto">
        <Table stickyHeader aria-label="sticky table">
          <TableRow>
            <TableCell colSpan={6}>
              <Skeleton variant="rectangular" height={50} width="100%" />
            </TableCell>
          </TableRow>
          {Array.from(new Array(5)).map((_, index) => ( 
            <TableRow key={index}>
              <TableCell>
                <Skeleton variant="circular" width={24} height={24} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width="100%" />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width="100%" />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width="100%" />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width="100%" />
              </TableCell>
              <TableCell>
                <Skeleton variant="rectangular" width={24} height={24} />
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Box>
    </CardContent>
  </Card>
);

export const MediaTabsAndSelectSkeleton = () => (
  <Grid elevation={1} mb={2}>
    <CardContent sx={{
      display:'flex',
      gap:2
    }}>
      <Skeleton variant="rectangular" height={48} width="15%" />
      <Skeleton variant="rectangular" height={48} width="15%" />
      <Skeleton variant="rectangular" height={48} width="15%" />
    </CardContent>
  </Grid>
);

export const  MediaButtonsAndDatePickerSkeleton = () => (
  <Box sx={{ bgColor: "background.default", p: { xs: 1, md: 2 }, mb: 4, borderRadius: 5, display:'flex' }}>
    <Grid container spacing={1} display="flex" flexDirection='row' justifyContent="space-between" alignItems="center">
      <Grid  display="flex" item xs={12} lg={10}>
        {Array.from(new Array(5)).map((_, index) => (  
          <Skeleton key={index} variant="rectangular" width={100} height={36} sx={{ margin: 1 }} />
        ))}
      </Grid>
      <Grid  display="flex" item>
        <Skeleton variant="rectangular" width={230} height={36} />
      </Grid>
    </Grid>
  </Box>
);

export const  MediaGraphSkeleton = () => (
  <Box sx={{ bgcolor: "background.default", p: { xs: 1, md: 2 }, mb: 4, borderRadius: 5 }}>
    <Skeleton variant="rectangular" height={300} width="100%" />
  </Box>
);

export const  BuildingCardSkeleton = () =>{
  return (
    <Card
      sx={{
        width: '100%',
        position: 'relative',
        mb: 2,
        transition: 'border-bottom 0.1s',
      }}
    >
      <CardMedia>
        <Skeleton variant="rectangular" height={140} sx={{ width: '100%' }} />
      </CardMedia>

      <Box sx={{ position: 'absolute', right: 10, top: 10 }}>
        <Skeleton variant="circular" width={40} height={40} />
      </Box>

      <CardContent sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton width="30%" height={24} />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Skeleton variant="rectangular" width={24} height={24} />
            <Skeleton variant="rectangular" width={24} height={24} />
          </Box>
        </Box>

        <Skeleton width="60%" height={28} sx={{ mt: 1 }} />
        <Skeleton width="60%" height={28} sx={{ mt: 1 }} />

        <Box sx={{ display: 'flex', mt: 2 }}>
          <Skeleton variant="rectangular" width="100%" height={58} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Skeleton variant="rectangular" width={123} height={58} />
          <Skeleton variant="rectangular" width={123} height={58} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Skeleton variant="rectangular" width={123} height={58} />
          <Skeleton variant="rectangular" width={123} height={58} />
        </Box>

        <Box sx={{ p: 1 }}>
          <Skeleton width="80%" height={24} />
          <Box sx={{ display: 'flex', gap: 2, pt: 1 }}>
            <Skeleton variant="rectangular" width={40} height={40} />
            <Skeleton variant="rectangular" width={40} height={40} />
            <Skeleton variant="rectangular" width={40} height={40} />
            <Skeleton variant="rectangular" width={40} height={40} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export const   BuildingCustomCardSkeleton = () =>{
  return (
    <Card sx={{ width: '100%', mb: 4 }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
          <Skeleton variant="text" width="40%" height={30} />
          <Box sx={{ width: 180, height: 40 }}>
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </Box>
          </Box>
          <Skeleton variant="rectangular" height={140} sx={{ flexGrow: 1 }} />
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <Skeleton variant="rectangular" width={140} height={40} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}


export const  FinancialProjectionSkeleton = () =>{
  return (
    <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2 }}>
      <CardContent sx={{ padding: 2 }}>
        <Skeleton width="60%" height={24} />

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Skeleton variant="rectangular" height={28} />
            <Skeleton width="80%" height={24} style={{ marginTop: 8 }} />
          </Grid>
          <Grid item xs={4} md={2}>
            <Skeleton width="70%" height={20} />
            <Skeleton width="50%" height={20} style={{ marginTop: 8 }} />
          </Grid>
          <Grid item xs={4} md={2}>
            <Skeleton width="70%" height={20} />
            <Skeleton width="50%" height={20} style={{ marginTop: 8 }} />
          </Grid>
          <Grid item xs={4} md={2}>
            <Skeleton width="70%" height={20} />
            <Skeleton width="50%" height={20} style={{ marginTop: 8 }} />
          </Grid>
          <Grid item xs={12} md={2}>
            <Skeleton variant="rectangular" width={100} height={36} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}


export const  BuildingMediaConsumptionSkeleton = () => {
  return (
    <Card sx={{ padding: 1, width: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton width="40%" height={24} />
        <Skeleton variant="rectangular" width={120} height={40} />
      </Box>
      <Divider sx={{ my: 1 }} />
      <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="center">
        <Grid item>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton width={60} height={20} sx={{ mt: 1 }} />
          <Skeleton width={60} height={20} sx={{ mt: 1 }} />
        </Grid>
        <Grid item>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton width={60} height={20} sx={{ mt: 1 }} />
          <Skeleton width={60} height={20} sx={{ mt: 1 }} />
        </Grid>
        <Grid item>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton width={60} height={20} sx={{ mt: 1 }} />
          <Skeleton width={60} height={20} sx={{ mt: 1 }} />
        </Grid>
      </Grid>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "end", mt: 2 }}
      >
        <Skeleton variant="rectangular" width={140} height={36} sx={{ mt: 2 }} />
      </Box>
    </Card>
  );
}

export const PrimaryEnergySkeleton = () => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Skeleton width="40%" height={24} />
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <Skeleton width="30%" height={28} />
          <Skeleton variant="circular" width={24} height={24} sx={{ marginLeft: 1 }} />
        </Box>
        <Skeleton width="20%" height={20} sx={{ mt: 1.5, alignSelf: 'center' }} />
        <Box sx={{ width: '100%', padding: 2 }}>
          <Skeleton variant="rectangular" height={5} sx={{ borderRadius: 5, marginBottom: 2 }} />
          <Skeleton variant="rectangular" height={24} sx={{ mt: 1 }} />
          <Skeleton width="30%" height={20} sx={{ mt: 1 }} />
        </Box>
        <Box sx={{ display: 'flex', mt: 1 }}>
          <Skeleton width="40%" height={16} />
          <Skeleton variant="rectangular" width="100%" height={58} sx={{ ml: 1, borderRadius: '10px' }} />
        </Box>
        <Box sx={{ display: 'flex', mt: 1 }}>
          <Skeleton width="40%" height={16} />
          <Skeleton variant="rectangular" width="100%" height={58} sx={{ ml: 1, borderRadius: '10px' }} />
        </Box>
      </CardContent>
    </Card>
  );
}


export const SensorsStatusSkeleton = () =>  {
  return (
    <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Skeleton width="30%" height={24} />
          <Skeleton variant="rectangular" width={140} height={36} />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
          <Skeleton variant="circular" width={24} height={24} />
          <Skeleton width="20%" height={24} />
          <Skeleton variant="circular" width={24} height={24} />
        </Box>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
          <Skeleton variant="rectangular" width="calc(40% - 16px)" height={64} />
          <Skeleton variant="rectangular" width="calc(40% - 16px)" height={64} />
          <Skeleton variant="rectangular" width="calc(40% - 16px)" height={64} />
        </Stack>
        <Box sx={{ mt: 3, mb: 1, p: 1, borderRadius: 1 }}>
          <Skeleton variant="rectangular" height={60} sx={{ width: '100%' }} />
        </Box>
      </CardContent>
    </Card>
  );
}


export const BuildingPrimaryEnergySkeleton = () =>  {
  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
          {/* Skeleton for the title */}
          <Skeleton width="40%" height={24} sx={{ marginBottom: 1 }} />

          <Divider sx={{ my: 1 }} />

          {/* Skeleton for the subtitle "Detected problems" */}
          <Skeleton width="60%" height={24} sx={{ marginTop: 1, marginBottom: 1 }} />

          {/* Skeleton for the alert */}
          <Skeleton variant="rectangular" height={60} sx={{ width: '100%', marginBottom: 2 }} />

          {/* Skeleton for the second subtitle "ML Suggestions" */}
          <Skeleton width="40%" height={24} sx={{ marginBottom: 1 }} />

          {/* Skeletons for list items */}
          <List sx={{ width: '100%' }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <ListItem sx={{ bgcolor: 'rgba(245, 247, 251, 1)', mb: 1 }} key={index}>
                <ListItemIcon>
                  <Skeleton variant="circular" width={40} height={40} />
                </ListItemIcon>
                <ListItemText
                  primary={<Skeleton width="50%" height={24} />}
                  secondary={<Skeleton width="30%" height={20} />}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}