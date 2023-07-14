import {Task} from '../../types';
import { TableRow, TableCell } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectPrepListById } from '../../features/preplists/prepListsSlice';

interface TaskRowProps {
    task: Task;
}

const TaskRow: React.FC<TaskRowProps> = ({ task }) => {
    const prepList = useSelector(selectPrepListById(task.prepList));
    return(
        <TableRow key={task.taskId}>
        <TableCell>{task.name}</TableCell>
        <TableCell>{prepList?.name}</TableCell>
        <TableCell align="right">{task.par}</TableCell>
      </TableRow>
    )
}

export default TaskRow;