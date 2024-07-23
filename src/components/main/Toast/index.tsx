import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { toast, ToastBar, Toaster } from 'react-hot-toast';

// https://mui.com/material-ui/material-icons/
function Toast() {
  return (
    <Toaster
      position="top-right"
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && (
                <IconButton onClick={() => toast.dismiss(t.id)}>
                  <CloseIcon />
                </IconButton>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}

export default Toast;