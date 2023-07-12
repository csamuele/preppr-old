import * as React from "react";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";



export interface PopupWindowProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const PopupWindow: React.FC<PopupWindowProps> = ({ xs = 400, lg, sm, md, open, onClose, children }) => {
  const theme = useTheme();
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: xs,
    [theme.breakpoints.up("sm")]: {
      width: sm,
    },
    [theme.breakpoints.up("md")]: {
      width: md,
    },
    [theme.breakpoints.up("lg")]: {
      width: lg,
    },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
        hideBackdrop
    >
      <Box sx={style}>
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default PopupWindow;
