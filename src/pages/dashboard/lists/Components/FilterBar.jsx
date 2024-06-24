import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  Select,
  InputAdornment,
  FormControl,
  useMediaQuery,
  Button,
  Menu,
} from '@mui/material'
import HeartFilter from '../../../../asset/svgs/HeartFilter'
import SearchIcon from '../../../../asset/svgs/SearchIcon'
import { useTheme } from '@mui/material/styles'
import { FilterSkeleton } from '../../../../components/Skeleton'
import { useSelector } from 'react-redux'
import Filter from '../../../../asset/svgs/Filter'
import RedHeartIcon from '../../../../asset/svgs/RedHeartIcon'
import DeleteIcon from '../../../../asset/svgs/DeleteIcon'
import AddIcon from '../../../../asset/svgs/AddIcon'

const FilterBar = () => {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = React.useState('')
  // const { isLoading } = useSelector((state) => state.loading)

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const toggleHeart = () => {
    setIsActive(!isActive)
  }
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  // if (isMediumScreen) {
  //   return (
  //     <Box sx={{ p: { xs: 1, md: 2 }, width: '100%', textAlign: 'center' }}>
  //       <Button
  //         aria-controls="filter-menu"
  //         aria-haspopup="true"
  //         onClick={handleClick}
  //         sx={{
  //           width: '100%',
  //           justifyContent: 'space-between',
  //           background: 'white',
  //         }}
  //       >
  //         Select Filters
  //         <span>▼</span>
  //       </Button>
  //       <Menu
  //         id="filter-menu"
  //         anchorEl={anchorEl}
  //         keepMounted
  //         open={open}
  //         onClose={handleClose}
  //         PaperProps={{
  //           style: {
  //             maxHeight: '40vh',
  //             width: '250px',
  //           },
  //         }}
  //       >
  //         <MenuItem>
  //           <TextField
  //             label="Enter the key phrase"
  //             variant="standard"
  //             size="small"
  //             sx={{
  //               flexGrow: 1,
  //               width: '210px',
  //               '& .MuiInput-underline:before': {
  //                 borderBottom: '2px solid rgba(17, 17, 17, 0.2)',
  //               },
  //               '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
  //                 borderBottom: '2px solid rgba(17, 17, 17, 0.2)',
  //               },
  //               '& .MuiInput-underline:after': {
  //                 borderBottomColor: 'rgba(17, 17, 17, 0.2)',
  //               },
  //             }}
  //             InputLabelProps={{
  //               style: {
  //                 color: 'rgba(17, 17, 17, 0.2)',
  //                 fontWeight: 'bold',
  //                 fontSize: '14px',
  //               },
  //             }}
  //             InputProps={{
  //               endAdornment: (
  //                 <InputAdornment position="end" sx={{ marginBottom: '8px' }}>
  //                   <SearchIcon />
  //                 </InputAdornment>
  //               ),
  //             }}
  //             placeholder="Search"
  //           />
  //         </MenuItem>
  //         <MenuItem onClick={handleClose}>
  //           <FormControl
  //             sx={{
  //               minWidth: 196,
  //               maxHeight: 48,
  //               m: 1,
  //               border: '2px solid rgba(17, 17, 17, 0.2)',
  //               borderRadius: 2,
  //               overflow: 'hidden',
  //             }}
  //           >
  //             <Select
  //               value={value}
  //               onChange={handleChange}
  //               displayEmpty
  //               sx={{
  //                 border: 'none',
  //                 '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
  //                 '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
  //                   { padding: '10.5px 14px' },
  //                 '&:focus': { backgroundColor: 'transparent' },
  //                 borderRadius: 'inherit',
  //               }}
  //               renderValue={(value) => {
  //                 if (value === '') {
  //                   return <span style={{ color: 'gray' }}>Status</span>
  //                 }
  //                 return value === '1' ? 'Option 1' : 'Option 2'
  //               }}
  //             >
  //               <MenuItem value="">Status</MenuItem>
  //               <MenuItem value="1">Option 1</MenuItem>
  //               <MenuItem value="2">Option 2</MenuItem>
  //             </Select>
  //           </FormControl>
  //         </MenuItem>
  //         <MenuItem onClick={handleClose}>
  //           <FormControl
  //             sx={{
  //               minWidth: 200,
  //               maxHeight: 48,
  //               m: 1,
  //               border: '2px solid rgba(17, 17, 17, 0.2)',
  //               borderRadius: 2,
  //               overflow: 'hidden',
  //             }}
  //           >
  //             <Select
  //               value={value}
  //               onChange={handleChange}
  //               displayEmpty
  //               sx={{
  //                 border: 'none',
  //                 '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
  //                 '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
  //                   { padding: '10.5px 14px' },
  //                 '&:focus': { backgroundColor: 'transparent' },
  //                 borderRadius: 'inherit',
  //               }}
  //               renderValue={(value) => {
  //                 if (value === '') {
  //                   return (
  //                     <span style={{ color: 'gray' }}>Type of building</span>
  //                   )
  //                 }
  //                 return value === '1' ? 'Option 1' : 'Option 2'
  //               }}
  //             >
  //               <MenuItem value="">Type of building</MenuItem>
  //               <MenuItem value="1">Option 1</MenuItem>
  //               <MenuItem value="2">Option 2</MenuItem>
  //             </Select>
  //           </FormControl>
  //         </MenuItem>
  //         <MenuItem onClick={handleClose}>
  //           <FormControl
  //             sx={{
  //               minWidth: 196,
  //               maxHeight: 48,
  //               m: 1,
  //               border: '2px solid rgba(17, 17, 17, 0.2)',
  //               borderRadius: 2,
  //               overflow: 'hidden',
  //             }}
  //           >
  //             <Select
  //               labelId="demo-simple-select-placeholder-label"
  //               id="demo-simple-select-placeholder-label"
  //               value={value}
  //               onChange={handleChange}
  //               displayEmpty
  //               sx={{
  //                 border: 'none',
  //                 '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
  //                 '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
  //                   { padding: '10.5px 14px' },
  //                 '&:focus': { backgroundColor: 'transparent' },
  //                 borderRadius: 'inherit',
  //               }}
  //               renderValue={(value) => {
  //                 if (value === '') {
  //                   return <span style={{ color: 'gray' }}>City</span>
  //                 }
  //                 return value === '1' ? 'Option 1' : 'Option 2'
  //               }}
  //             >
  //               <MenuItem value="">City</MenuItem>
  //               <MenuItem value="1">Option 1</MenuItem>
  //               <MenuItem value="2">Option 2</MenuItem>
  //             </Select>
  //           </FormControl>
  //         </MenuItem>
  //       </Menu>
  //     </Box>
  //   )
  // }

  return (
    <>
      {isLoading ? (
        <FilterSkeleton />
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // alignItems: { sm: 'center', xs: 'start' },
            // flexDirection: { sm: 'row', xs: 'column' },

            // maxHeight: '72px',
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
              alignItems: 'center',
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
              placeholder="Search"
            />
            {/* </Box> */}
            <Filter />

            <RedHeartIcon />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { sm: 1, xs: 0.5 },
            }}
          >
            <DeleteIcon />
            <AddIcon />
          </Box>
        </Box>
      )}
    </>
  )
}

export default FilterBar
