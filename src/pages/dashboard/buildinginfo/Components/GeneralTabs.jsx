import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Tab,
  Tabs,
  Select,
  MenuItem,
  FormControl,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles' // Import useTheme
import BuildingDetails from './BuildingDetails/BuildingDetails'
import FinancialProjections from './FinancialProjections/FinancialProjections'
import InspectionHistory from './InspectionHistory/InspectionHistory'
import MediaConsumption from './MediaConsumption/MediaConsumption'
import SelfRegulation from './SelfRegulation/SelfRegulation'
import Sensors from './Sensors/Sensors'
import BuildingDetailIcon from '../../../../asset/svgs/buildingdetails/TabsIcon/BuildingDetailIcon'
import MediaConsumptionIcon from '../../../../asset/svgs/buildingdetails/TabsIcon/MediaConsumptionIcon'
import FinProjectionIcon from '../../../../asset/svgs/buildingdetails/TabsIcon/FinProjectionIcon'
import InspectionHistoryIcon from '../../../../asset/svgs/buildingdetails/TabsIcon/InspectionHistoryIcon'
import SensorIcon from '../../../../asset/svgs/buildingdetails/TabsIcon/SensorIcon'
import SelfRegulationIcon from '../../../../asset/svgs/buildingdetails/TabsIcon/SelfRegulationIcon'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <Box
      sx={{
        opacity: value === index ? 1 : 0,
        transform: value === index ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease',
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 0, md: 1.5 }, mt: { xs: 1, md: 0 } }}>
          {children}
        </Box>
      )}
    </Box>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const GeneralTabs = () => {
  const theme = useTheme() // Get the theme from useTheme
  const [value, setValue] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const baseStyle = {
      height: '2px',
      backgroundColor: 'rgba(123, 66, 246, 1)',
      // boxShadow: '0 0 0 4px rgba(123, 66, 246, 0.5)',
      transition: 'width 0.3s, margin-left 0.3s',
    }
    const widths = [125, 125, 175, 155, 160, 100]
    setIndicatorStyle({
      ...baseStyle,
      width: `${widths[value]}px`,
      // marginLeft: `${20 * value}px`, // Adjust margin as per tab width
    })
  }, [value])

  return (
    <Box
      sx={{
        background: 'white',
        borderRadius: '14px',
        p: { xs: 1, md: 3, lg: 1 },
        mt: 1,
      }}
    >
      <Box>
        {isSmallScreen ? (
          <FormControl sx={{ mt: { xs: 3, md: 0 } }} fullWidth>
            <Select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={0}>Building Details</MenuItem>
              <MenuItem value={1}>Self Regulation</MenuItem>
              <MenuItem value={2}>Media Consumption</MenuItem>
              <MenuItem value={3}>Financial Projections</MenuItem>
              <MenuItem value={4}>Inspection History</MenuItem>
              <MenuItem value={5}>Sensors</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: indicatorStyle }}
          >
            <Tab
              sx={{
                textTransform: 'none',
                fontSize: '12px',
                lineHeight: '16.34px',
                fontWeight: '600',
              }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <BuildingDetailIcon />
                  Building details
                </Box>
              }
              {...a11yProps(0)}
              // icon={<BuildingDetailIcon sx={{ marginRight: '2px' }} />}
              // iconPosition="start"
            />
            <Tab
              sx={{
                textTransform: 'none',
                fontSize: '12px',
                lineHeight: '16.34px',
                fontWeight: '600',
              }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <SelfRegulationIcon />
                  Self regulation
                </Box>
              }
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                textTransform: 'none',
                fontSize: '12px',
                lineHeight: '16.34px',
                fontWeight: '600',
              }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <MediaConsumptionIcon />
                  Media consumption
                </Box>
              }
              {...a11yProps(2)}
            />
            <Tab
              sx={{
                textTransform: 'none',
                fontSize: '12px',
                lineHeight: '16.34px',
                fontWeight: '600',
              }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <FinProjectionIcon />
                  Financial projection
                </Box>
              }
              {...a11yProps(3)}
            />
            <Tab
              sx={{
                textTransform: 'none',
                fontSize: '12px',
                lineHeight: '16.34px',
                fontWeight: '600',
              }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <InspectionHistoryIcon />
                  Inspection history
                </Box>
              }
              {...a11yProps(4)}
            />
            <Tab
              sx={{
                textTransform: 'none',
                fontSize: '12px',
                lineHeight: '16.34px',
                fontWeight: '600',
              }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <SensorIcon />
                  Sensors
                </Box>
              }
              {...a11yProps(5)}
            />
          </Tabs>
        )}
      </Box>
      <TabPanel value={value} index={0}>
        <BuildingDetails />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SelfRegulation />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MediaConsumption />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FinancialProjections />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <InspectionHistory />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Sensors />
      </TabPanel>
    </Box>
  )
}

export default GeneralTabs
