// floorFileReducer.js

const initialState = {
  fileMetadata: null, // Example for storing file metadata
  // other initial state properties
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'file/setFile':
      return {
        ...state,
        fileMetadata: action.payload, // Store file metadata in state
      };
    // Add more cases as needed
    default:
      return state;
  }
};

export const setFile = (fileMetadata) => ({
  type: 'file/setFile',
  payload: fileMetadata,
});

export default fileReducer;
