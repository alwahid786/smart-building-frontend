import React, { useState, useEffect } from 'react'
import { Box, TextField, InputAdornment, MenuItem, Select } from '@mui/material'
import SearchIcon from '../../../../asset/svgs/SearchIcon'
import Filter from '../../../../asset/svgs/Filter'
import RedHeartIcon from '../../../../asset/svgs/RedHeartIcon'
import AddIcon from '../../../../asset/svgs/AddIcon'
import BackFilter from '../../../../asset/svgs/BackFilter'
import { Link } from 'react-router-dom'

const FilterBar = () => {
  const [value, setValue] = React.useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const toggleFilterIcon = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
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
              display: 'hidden',
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

        {/* Filter Icon and Red Heart Icon */}
        {!isFilterOpen && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              opacity: isFilterOpen ? 0 : 1,
              transform: isFilterOpen ? 'translateX(-20px)' : 'translateX(0)',
              visibility: isFilterOpen ? 'hidden' : 'visible',
            }}
          >
            <Box sx={{ cursor: 'pointer' }} onClick={toggleFilterIcon}>
              <Filter />
            </Box>
            <Box sx={{ cursor: 'pointer' }}>
              <RedHeartIcon />
            </Box>
          </Box>
        )}

        {/* Container for Select fields with transition effects */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            opacity: isFilterOpen ? 1 : 0,
            transform: isFilterOpen ? 'translateX(0)' : 'translateX(-20px)',
            visibility: isFilterOpen ? 'visible' : 'hidden',
            marginLeft: isFilterOpen ? '8px' : '0',
          }}
        >
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
        </Box>

        {/* BackFilter and Red Heart Icon */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            opacity: isFilterOpen ? 1 : 0,
            transform: isFilterOpen ? 'translateX(0)' : 'translateX(-20px)',
            visibility: isFilterOpen ? 'visible' : 'hidden',
            marginLeft: isFilterOpen ? '8px' : '0',
          }}
        >
          <Box
            sx={{
              cursor: 'pointer',
            }}
            onClick={toggleFilterIcon}
          >
            <BackFilter />
          </Box>
          <Box sx={{ cursor: 'pointer' }}>
            <RedHeartIcon />
          </Box>
        </Box>
      </Box>

      {/* Add Icon (stationary) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { sm: 1, xs: 0.5 },
        }}
      >
        <Link to="/dashboard/addbuilding">
          <Box sx={{ cursor: 'pointer' }}>
            <AddIcon />
          </Box>
        </Link>
      </Box>
    </Box>
  )
}

export default FilterBar
