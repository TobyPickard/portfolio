// AddButton.tsx
import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <IconButton
      color="primary"
      onClick={onClick}
      style={{
        background: '#165a72',
        color:'#00000',
        position: 'fixed',
        bottom: '100px',
        right: '100px',
        padding: '20px',
      }}
    >
      <AddIcon style={{ color: '#ffffff', fontSize: '2rem', }} />
    </IconButton>
  );
};

export default AddButton;
