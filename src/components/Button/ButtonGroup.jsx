import React, { useState } from 'react';
import { Button, ButtonGroup as MuiButtonGroup } from '@mui/material';

const ButtonGroup = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('Alam');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <MuiButtonGroup variant="outlined" aria-label="outlined button group">
      <Button
        onClick={() => handleCategoryClick('Alam')}
        sx={{
          borderTopLeftRadius: '10px',
          backgroundColor: selectedCategory === 'Alam' ? '#87CEEB' : 'inherit',
        }}
      >
        Alam
      </Button>
      <Button
        onClick={() => handleCategoryClick('Budaya')}
        sx={{ backgroundColor: selectedCategory === 'Budaya' ? '#87CEEB' : 'inherit' }}
      >
        Budaya
      </Button>
      <Button
        onClick={() => handleCategoryClick('Kuliner')}
        sx={{
          borderTopRightRadius: '10px',
          backgroundColor: selectedCategory === 'Kuliner' ? '#87CEEB' : 'inherit',
        }}
      >
        Kuliner
      </Button>
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
