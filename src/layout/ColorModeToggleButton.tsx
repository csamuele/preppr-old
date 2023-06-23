import React, { useContext } from 'react';
import { Switch } from '@mui/material';
import { ColorModeContext } from './ToggleColorMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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
      icon={<Brightness4Icon />}
      checkedIcon={<Brightness7Icon />}
    />
  );
};

export default ColorModeToggleButton;
