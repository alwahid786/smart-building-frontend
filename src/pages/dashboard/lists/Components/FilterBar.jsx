import React, { useState, useEffect } from 'react'
import {
  Box,
  TextField,
  InputAdornment,
  // useMediaQuery,
  MenuItem,
  Select,
} from '@mui/material'
import SearchIcon from '../../../../asset/svgs/SearchIcon'
// import { useTheme } from '@mui/material/styles'
import { FilterSkeleton } from '../../../../components/Skeleton'
import Filter from '../../../../asset/svgs/Filter'
import RedHeartIcon from '../../../../asset/svgs/RedHeartIcon'
import AddIcon from '../../../../asset/svgs/AddIcon'
import BackFilter from '../../../../asset/svgs/BackFilter'
import { Link } from 'react-router-dom'

const FilterBar = () => {
  // const [isActive, setIsActive] = useState(false)
  const [value, setValue] = React.useState('')
  // const { isLoading } = useSelector((state) => state.loading)

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  // const toggleHeart = () => {
  //   setIsActive(!isActive)
  // }
  // const theme = useTheme()
  // const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  // const [anchorEl, setAnchorEl] = useState(null)
  // const open = Boolean(anchorEl)

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget)
  // }

  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  const [isLoading, setIsLoading] = useState(true)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const toggleFilterIcon = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {/* {isLoading ? (
        <FilterSkeleton />
      ) : ( */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',

          margin: '0 auto',
          gap: 2,
          p: 2,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          maxWidth: '100%',
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'end',
            gap: { sm: 1, xs: 0.5 },
          }}
        >
          {/* <Box sx={{}}> */}
          <TextField
            variant="outlined"
            size="small"
            sx={{
              flexGrow: 1,
              width: 'auto',
              '& .MuiInput-underline:before': {
                borderBottom: '2px solid rgba(17, 17, 17, 0.2)',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottom: '2px solid rgba(17, 17, 17, 0.2)',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'rgba(17, 17, 17, 0.2)',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'rgba(17, 17, 17, 0.2)',
                fontWeight: 'bold',
                fontSize: '12px',
                display: 'none',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search by name"
          />
          {isFilterOpen && (
            <>
              <Select
                value={value}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: 120, height: 40 }}
              >
                <MenuItem value="">
                  <span
                    style={{
                      color: 'rgba(17, 17, 17, 0.6)',
                      fontSize: '14px',
                    }}
                  >
                    Status
                  </span>
                </MenuItem>
                <MenuItem value="1">Status 1</MenuItem>
                <MenuItem value="2">Status 2</MenuItem>
              </Select>
              <Select
                value={value}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: 120, height: 40 }}
              >
                <MenuItem value="">
                  <span
                    style={{
                      color: 'rgba(17, 17, 17, 0.6)',
                      fontSize: '14px',
                    }}
                  >
                    City
                  </span>
                </MenuItem>
                <MenuItem value="1">City 1</MenuItem>
                <MenuItem value="2">City 2</MenuItem>
              </Select>
            </>
          )}

          <Box sx={{ cursor: 'pointer' }} onClick={toggleFilterIcon}>
            {!isFilterOpen ? <Filter /> : <BackFilter />}
          </Box>
          {/* <Box sx={{ cursor: 'pointer' }}>
              <BackFilter />
            </Box> */}
          <Box sx={{ cursor: 'pointer' }}>
            <RedHeartIcon />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { sm: 1, xs: 0.5 },
          }}
        >
          {/* <Box sx={{ cursor: 'pointer' }}>
              <DeleteIcon />
            </Box> */}
          <Link to="/dashboard/addbuilding">
            <Box sx={{ cursor: 'pointer' }}>
              <AddIcon />
            </Box>
          </Link>
        </Box>
      </Box>
      {/* )} */}
    </>
  )
}

export default FilterBar
