import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';

const CardPhotos = ({ image, onDelete, onEdit }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <img src={image} alt="Building" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      {onDelete && (
        <IconButton
          aria-label="delete"
          sx={{ position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(255, 255, 255, 0.7)', p: 0.5 }}
          onClick={onDelete}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      )}
      {onEdit && (
        <IconButton
          aria-label="edit"
          sx={{ position: 'absolute', top: 8, right: 40, backgroundColor: 'rgba(255, 255, 255, 0.7)', p: 0.5 }}
          onClick={onEdit}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
};

CardPhotos.propTypes = {
  image: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default CardPhotos;
