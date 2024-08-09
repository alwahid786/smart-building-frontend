/* eslint-disable react/prop-types */
import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  Button,
} from '@mui/material';
import SearchIcon from '../../../../asset/svgs/SearchIcon';
import Filter from '../../../../asset/svgs/Filter';
import RedHeartIcon from '../../../../asset/svgs/RedHeartIcon';
import AddIcon from '../../../../asset/svgs/AddIcon';
import BackFilter from '../../../../asset/svgs/BackFilter';
import { useState, useEffect } from 'react';
import useDebounce from '../../../../hooks/useDebounce';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const FilterBar = ({ onSearchTermChange, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [range, setRange] = useState('');
  const [constructionYear, setConstructionYear] = useState(null); // Set initial state to null
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Handle date change and extract year
  const handleDateChange = (date) => {
    if (date) {
      const year = date.getFullYear();
      setConstructionYear(year);
    } else {
      setConstructionYear(null); // Reset to null if no date selected
    }

  };

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };

  const toggleFilterIcon = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setRange('');
    setConstructionYear(null); // Reset to null
  };

  useEffect(() => {
    onSearchTermChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearchTermChange]);

  useEffect(() => {
    onFilterChange({ range, constructionYear });
  }, [range, constructionYear, onFilterChange]);

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

          <Box
      sx={{
        marginRight:"20px",
        '.react-datepicker-wrapper': {
          width: '100%',
        },
        '.react-datepicker__input-container': {
          width: '100%',
        },
        '.react-datepicker__year-read-view--down-arrow': {
          borderColor: 'transparent transparent #000 transparent', // Customize the dropdown arrow
        },
        '.react-datepicker__year-dropdown': {
          backgroundColor: '#fff', // Background color of the year dropdown
          border: '1px solid #ccc',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        },
        '.react-datepicker__year-option': {
          fontSize: '1rem',
          padding: '10px 15px',
        },
        '.react-datepicker__year-option:hover': {
          backgroundColor: '#f0f0f0', // Hover effect for dropdown items
        },
        '.react-datepicker__year-option--selected': {
          backgroundColor: '#007bff', // Selected year background color
          color: '#fff', // Selected year text color
        },
        '.react-datepicker__input-container input': {
          width: '100%',
          padding: '8px 12px',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9', // Input background color
          '&:hover': {
            borderColor: '#007bff', // Hover effect for input border
          },
          '&:focus': {
            borderColor: '#007bff', // Focus effect for input border
            outline: 'none',
          },
        },
        '.react-datepicker__triangle': {
          display: 'none', // Hide the small arrow above the datepicker
        },
      }}
    >
      <DatePicker
        id="DatePicker"
        selected={constructionYear ? new Date(constructionYear, 0, 1) : null}
        onChange={handleDateChange}
        showYearPicker
        dateFormat="yyyy"
        placeholderText="Construction Year"
      />
    </Box>
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
  );
};

export default FilterBar;
