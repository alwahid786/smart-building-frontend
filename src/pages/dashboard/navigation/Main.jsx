import { Box } from '@mui/material'

import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Box
        // sx={{
        //   padding: {
        //     xs: '0 16px 16px 16px',
        //     lg: '0 36px 36px 36px',
        //   },
        //   position: 'relative',
        //   zIndex: '10',
        //   marginTop: '-3rem',
        //   height: '100%',
        //   overflowX: 'clip',
        // }}
        sx={{
          // border: '2px solid red',
          marginTop: '60px',
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}

export default Main
