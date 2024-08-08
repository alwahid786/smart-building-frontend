/* eslint-disable react/prop-types */
import { Box, TextField, InputAdornment, Select, MenuItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'
import useDebounce from '../../../../hooks/useDebounce'
import AddIcon from '../../../../asset/svgs/AddIcon'
import RedHeartIcon from '../../../../asset/svgs/RedHeartIcon'
import { Link } from 'react-router-dom'
import BackFilter from '../../../../asset/svgs/BackFilter'
import Filter from '../../../../asset/svgs/Filter'

const FilterBar = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 700)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [value, setValue] = useState('')

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const toggleFilterIcon = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  // Pass debounced search term to parent component
  useEffect(() => {
    onSearchTermChange(debouncedSearchTerm)
  }, [debouncedSearchTerm, onSearchTermChange])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search by name"
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {isFilterOpen && (
          <>
            <Select
              value={value}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Status' }}
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
              inputProps={{ 'aria-label': 'City' }}
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
        <Box sx={{ cursor: 'pointer' }}>
          <RedHeartIcon />
        </Box>
      </Box>

      <Link to="/dashboard/addbuilding">
        <Box sx={{ cursor: 'pointer' }}>
          <AddIcon />
        </Box>
      </Link>
    </Box>
  )
}

export default FilterBar
