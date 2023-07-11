import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import { v4 as uuidv4 } from 'uuid';

interface SelectProps<T = unknown> {
  id?: string;
  value: T;
  children: React.ReactNode;
  label: string;
  onChange: (event: SelectChangeEvent<T>) => void;
}

const Select = <T,>(props: SelectProps<T>) => {
  const { id = uuidv4(), value, children, label, onChange, ...rest } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <MuiSelect {...rest} labelId={`${id}-label`} id={id} value={value} label={label} onChange={onChange}>
          {children}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
