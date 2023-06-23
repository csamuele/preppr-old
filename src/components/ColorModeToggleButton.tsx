import React, { useContext } from 'react';
import { Switch } from '@mui/material';
import { ColorModeContext } from './ToggleColorMode';

interface ColorModeToggleButtonProps {
  onToggle: () => void;
}

const ColorModeToggleButton: React.FC<ColorModeToggleButtonProps> = ({ onToggle }) => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Switch
      checked={colorMode.mode === 'dark'}
      onChange={onToggle}
      color="primary"
    />
  );
};

export default ColorModeToggleButton;
