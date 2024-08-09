/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Box, TextField, InputAdornment, MenuItem, Select, Button } from '@mui/material'
import SearchIcon from '../../../../asset/svgs/SearchIcon'
import Filter from '../../../../asset/svgs/Filter'
import RedHeartIcon from '../../../../asset/svgs/RedHeartIcon'
import AddIcon from '../../../../asset/svgs/AddIcon'
import BackFilter from '../../../../asset/svgs/BackFilter'
import { Link } from 'react-router-dom'
import useDebounce from '../../../../hooks/useDebounce'

const FilterBar = ({ onSearchTermChange, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const [range, setRange] = useState('')
  const [startYear, setStartYear] = useState('')
  const [endYear, setEndYear] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleRangeChange = (event) => {
    setRange(event.target.value)
  }

  const handleStartYearChange = (event) => {
    setStartYear(event.target.value)
  }

  const handleEndYearChange = (event) => {
    setEndYear(event.target.value)
  }

  const toggleFilterIcon = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setRange('')
    setStartYear('')
    setEndYear('')
  }

  useEffect(() => {
    onSearchTermChange(debouncedSearchTerm)
  }, [debouncedSearchTerm, onSearchTermChange])

  useEffect(() => {
    onFilterChange({ range, startYear, endYear })
  }, [range, startYear, endYear, onFilterChange])

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
          onChange={handleSearchChange}
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
            value={range}
            onChange={handleRangeChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Range' }}
            sx={{ width: 200, height: 40 }}
          >
            <MenuItem value="">
              <span
                style={{
                  color: 'rgba(17, 17, 17, 0.6)',
                  fontSize: '14px',
                }}
              >
                Area
              </span>
            </MenuItem>
            <MenuItem value="2-8">0 - 8</MenuItem>
            <MenuItem value="9-20">9 - 20</MenuItem>
            <MenuItem value="21-30">21 - 30</MenuItem>
            {/* Add more ranges as needed */}
          </Select>

          <Select
            value={startYear}
            onChange={handleStartYearChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Start Year' }}
            sx={{ width: 200, height: 40 }}
          >
            <MenuItem value="">
              <span
                style={{ color: 'rgba(17, 17, 17, 0.6)', fontSize: '14px' }}
              >
                Start Year
              </span>
            </MenuItem>
            <MenuItem value="2000">2000</MenuItem>
            <MenuItem value="2005">2005</MenuItem>
            <MenuItem value="2010">2010</MenuItem>
            <MenuItem value="2015">2015</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
            {/* Add more years as needed */}
          </Select>

          <Select
            value={endYear}
            onChange={handleEndYearChange}
            displayEmpty
            inputProps={{ 'aria-label': 'End Year' }}
            sx={{ width: 200, height: 40 }}
          >
            <MenuItem value="">
              <span
                style={{ color: 'rgba(17, 17, 17, 0.6)', fontSize: '14px' }}
              >
                End Year
              </span>
            </MenuItem>
            <MenuItem value="2005">2005</MenuItem>
            <MenuItem value="2010">2010</MenuItem>
            <MenuItem value="2015">2015</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="2030">2030</MenuItem>
            {/* Add more years as needed */}
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

        {/* Clear Filters Button */}
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleClearFilters}
        >
          Clear Filters
        </Button>
      </Box>
    </Box>
  )
}

export default FilterBar
