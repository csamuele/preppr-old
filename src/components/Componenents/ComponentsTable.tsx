import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import Remove from '@mui/icons-material/Remove';
import Clear from '@mui/icons-material/Clear';
import Edit from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';
import ComponentNewEdit from './ComponentNewEdit';

interface RowProps {
  component: {
    componentId: number;
    name: string;
    dishes: {
      dishId: number;
      name: string;
    }[];
    tasks: {
      taskId: number;
      prepList: string;
      name: string;
      par: string;
    }[];
  };
}

const Row: React.FC<RowProps> = ({ component }) => {
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const theme = useTheme();

  return (
    <React.Fragment>
      <Paper elevation={3} >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <Typography variant="h6" sx={{ flex: 1 }}>
            {component.name}
          </Typography>
          <IconButton aria-label="edit" onClick={handleEditOpen}>
            <Edit />
          </IconButton>
          <ComponentNewEdit open={editOpen} onClose={handleEditClose} component={component} />
          <IconButton aria-label="remove" color="error">
            <Remove />
          </IconButton>
        </Box>
      </Paper>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ margin: 2 }}>
        <TableContainer sx={{ margin: 1 }}>
          <Table size="small" aria-label="tasks">
            <TableHead>
              <TableRow>
                <TableCell>Task</TableCell>
                <TableCell>Prep List</TableCell>
                <TableCell align="right">Par</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {component.tasks.map((taskRow) => (
                <TableRow key={taskRow.taskId}>
                  <TableCell>{taskRow.name}</TableCell>
                  <TableCell>{taskRow.prepList}</TableCell>
                  <TableCell align="right">{taskRow.par}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
      </Collapse>
    </React.Fragment>
  );
};

interface ComponentsTableProps {
  componentsList: {
    componentId: number;
    name: string;
    dishes: {
      dishId: number;
      name: string;
    }[];
    tasks: {
      taskId: number;
      prepList: string;
      name: string;
      par: string;
    }[];
  }[];
}

const ComponentsTable: React.FC<ComponentsTableProps> = ({ componentsList }) => {
  return (
    <Paper sx={{maxHeight: '50vh', overflow: 'auto'}}>
      {componentsList.map((component) => (
        <Row key={component.componentId} component={component} />
      ))}
    </Paper>
  );
}

export default ComponentsTable;
