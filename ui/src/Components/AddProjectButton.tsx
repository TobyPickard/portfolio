// AddButton.tsx
import React, {useState} from 'react';
import { Button } from '@mui/material';
import AddProjectDialog from './AddProjectDialog'


const AddProjectButton: React.FC<AddButtonProps> = ({ addProject }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    console.log(addProject)
    // setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
      <Button onClick={openDialog}>Open Dialog</Button>
      {isOpen && <AddProjectDialog open onClose={closeDialog} addProject={addProject} />}
    </div>
  );
};

export default AddProjectButton;
