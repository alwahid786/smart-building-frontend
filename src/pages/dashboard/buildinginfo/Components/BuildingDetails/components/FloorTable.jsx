import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FullFloorDetail from './FullFloorDetail'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [createData(3, 159), createData(6, 237)]

const FloorTable = () => {
  return (
    <Accordion sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ padding: 2 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 12, md: 16 },
            fontWeight: 600,
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          Floor Detail With Sensor
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 2 }}>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Floor No.</b>
                </TableCell>
                <TableCell>
                  <b>Total Rooms</b>
                </TableCell>
                <TableCell>
                  <b>Detail</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>
                    <Button
                      onClick={<FullFloorDetail />}
                      variant="contained"
                      sx={{
                        background:
                          'linear-gradient(95.25deg, #7B42F6 0%, #B01EFF 100%)',
                        textTransform: 'none',
                        borderRadius: '8px',
                        marginBottom: '6px',
                        color: 'white',
                        borderColor: 'transparent',
                        borderStyle: 'solid',
                        borderImageSlice: 1,
                        borderImageSource:
                          'linear-gradient(95.25deg, #7B42F6 0%, #B01EFF 100%)',
                      }}
                    >
                      See More
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  )
}

export default FloorTable
