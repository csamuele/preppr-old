import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import Option from './Option';


type SelectProps = {
  id: string;
  value: number;
  options: Option[];
  label: string;
  onChange: (value: number) => void;
};

const Select: React.FC<SelectProps> = ({id, value, options, label, onChange}) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    onChange(event.target.value as number);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <MuiSelect
          labelId={`${id}-label`}
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
