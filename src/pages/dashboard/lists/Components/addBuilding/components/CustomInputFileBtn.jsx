/* eslint-disable react/prop-types */
import { Button, Box } from '@mui/material'
import { styled } from '@mui/system'

const InputFile = styled('input')({
  display: 'none',
})

const CustomButton = styled(Button)({
  border: '2px dashed #00000050',
  padding: '16px',
  textAlign: 'center',
  width: '100%',
  height: '200px',
  textTransform: 'none',
  color: '#00000070 ',
  fontSize: '20px',
})

const CustomInputFileBtn = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      onFileSelect(file)
    }
  }
  return (
    <Box>
      <label htmlFor="upload-file">
        <InputFile id="upload-file" type="file" onChange={handleFileChange} />
        <CustomButton component="span">Click to select image</CustomButton>
      </label>
    </Box>
  )
}

export default CustomInputFileBtn
