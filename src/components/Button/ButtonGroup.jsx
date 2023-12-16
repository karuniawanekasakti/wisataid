import React, { useState } from 'react';
import { Button, ButtonGroup as MuiButtonGroup } from '@mui/material';

const ButtonGroup = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('Kebudayaan');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <MuiButtonGroup variant="outlined" aria-label="outlined button group">
      <Button
        onClick={() => handleCategoryClick('Kebudayaan')}
        sx={{ borderTopLeftRadius: '10px', backgroundColor: selectedCategory === 'Kebudayaan' ? 'rgba(135, 206, 235, 0.3)' : 'inherit' }}
      >
        Kebudayaan
      </Button>
      <Button
        onClick={() => handleCategoryClick('Bahari')}
        sx={{ backgroundColor: selectedCategory === 'Bahari' ? 'rgba(135, 206, 235, 0.3)' : 'inherit' }}
      >
        Bahari
      </Button>
      <Button
        onClick={() => handleCategoryClick('Alam')}
        sx={{ borderTopRightRadius: '10px', backgroundColor: selectedCategory === 'Alam' ? 'rgba(135, 206, 235, 0.3)' : 'inherit' }}
      >
        Alam
      </Button>
    </MuiButtonGroup>
  );
};

export default ButtonGroup;