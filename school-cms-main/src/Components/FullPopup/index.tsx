import { forwardRef, Ref, ReactElement } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  useMediaQuery,
  useTheme,
  DialogActions,
  DialogContent
} from "@mui/material";

export default function FullPopup({
  title,
  action,
  actionTitle,
  children,
  open,
  setOpen
}: {
  title: string;
  action?: () => void;
  actionTitle: string;
  children: ReactElement;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="create-dialog">
      <DialogTitle id="create-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Huỷ bỏ</Button>
        <Button
          onClick={() => {
            if (action) {
              action();
            }
            handleClose();
          }}>
          {actionTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
