import React from 'react'
import { Box, Typography, Divider, Card } from '@mui/material'
import EnergyConsumption from './EnergyConsumption'
import BarChart from './BarChart '
import StandardControl from './StandardControl'
import UtilityCard from './UtilityCard'

const index = () => {
  const data = [
    { date: '1 June, 2020', mwh: 240 },
    { date: '2 June, 2020', mwh: 333 },
    { date: '3 June, 2020', mwh: 353 },
    { date: '4 June, 2020', mwh: 258 },
    { date: '5 June, 2020', mwh: 285 },
    { date: '6 June, 2020', mwh: 285 },
    { date: '7 June, 2020', mwh: 159 },
  ]
  return (
    <>
      <EnergyConsumption />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <BarChart data={data} />
          <StandardControl />
        </Box>

        <UtilityCard />
      </Box>
    </>
  )
}

export default index
