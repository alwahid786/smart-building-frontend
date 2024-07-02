import { Box } from '@mui/material'

import ImageEdit from '../../../../../../asset/svgs/ImageEdit'
import ImageDelete from '../../../../../../asset/svgs/ImageDelete'

const CardPhotos = ({ image, deleteImage }) => {
  return (
    <>
      <Box position="relative" width="240px" height="220px">
        <img
          src={image}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          alt="Uploaded Photo"
        />
        <Box
          position="absolute"
          top={5}
          end={0}
          right={5}
          // bgcolor="rgba(255, 255, 255, 0.8)"
          zIndex={1}
          sx={{ display: 'flex', gap: '5px' }}
        >
          {/* <IconButton aria-label="edit" color="primary"> */}
          <Box sx={{ cursor: 'pointer' }} onClick={() => console.log('edited')}>
            <ImageEdit />
          </Box>
          <Box sx={{ cursor: 'pointer' }} onClick={deleteImage}>
            <ImageDelete />
          </Box>
          {/* </IconButton> */}
        </Box>
      </Box>
    </>
  )
}

export default CardPhotos
