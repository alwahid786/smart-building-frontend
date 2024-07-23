import {
  Box,
  Button,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import AddIcon from '../../../asset/svgs/AddIcon'
import { useState } from 'react'
import AddSensor from './AddSensor'
import { useGetAllSensorsQuery } from '../../../redux/api/sensorApi'

const rows = [
  {
    name: 'light',
    ip: 192,
    url: 'www.sensor',
    port: 'ths',
    type: 'light',
    location: 'UK',
  },
]
const Sensors = () => {
  const [checked, setChecked] = useState(true)
  const { data } = useGetAllSensorsQuery()

  console.log("Data", data)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <Box
      sx={{
        background: '#FFFFFF',
        borderRadius: '14px',
        p: { lg: 2, xl: 4 },
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 2s ease forwards',
        '@keyframes fadeInUp': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      {' '}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <Typography
          sx={{ fontWeight: '600', fontSize: '20px', lineHeight: '32px' }}
        >
          All Sensors{' '}
        </Typography>
        <Box onClick={handleOpen} sx={{ cursor: 'pointer' }}>
          <AddIcon />
        </Box>
      </Box>
      <AddSensor open={open} handleClose={handleClose} />
      <Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Sensor Name</b>
                </TableCell>
                <TableCell align="left">
                  <b>IP</b>
                </TableCell>
                <TableCell align="left">
                  <b>uniqueId</b>
                </TableCell>
                <TableCell align="left">
                  <b>Port</b>
                </TableCell>
                <TableCell align="left">
                  <b>Type</b>
                </TableCell>
                <TableCell align="left">
                  <b>Status</b>
                </TableCell>
                <TableCell align="left">
                  <b>Action</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{row.sensorName}</TableCell>
                  <TableCell align="left">{row.ip}</TableCell>
                  <TableCell align="left">{row.uniqueId}</TableCell>
                  <TableCell align="left">{row.port}</TableCell>
                  <TableCell align="left">{row.sensorType}</TableCell>
                  <TableCell align="left">
                    {' '}
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default Sensors
