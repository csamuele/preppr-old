import PopupWindow, {PopupWindowProps} from "../Utils/PopupWindow";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const ComponenentsSearch:React.FC<PopupWindowProps> = ({open, onClose}) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle search functionality
        console.log(event.target.value);
    };
    return (
        <PopupWindow open={open} onClose={onClose}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Search" variant="outlined" onChange={handleSearchChange} fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>

            </Grid>
        </PopupWindow>
    );
}

export default ComponenentsSearch;