import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { theme } from "conf/theme";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const LumSnackBar = ({ isOpen, handleClose, severity, message, anchorOrigin = {} }) => {

    const severityColors = {
        success: {
            backgroundColor: theme.palette.success.dark,
            color: theme.palette.success.contrastText,
        },
        error: {
            backgroundColor: theme.palette.error.dark,
            color: theme.palette.error.contrastText,
        },
        warning: {
            backgroundColor: theme.palette.warning.dark,
            color: theme.palette.warning.contrastText,
        },
        info: {
            backgroundColor: theme.palette.info.dark,
            color: theme.palette.info.contrastText,
        },
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose} anchorOrigin={anchorOrigin}>
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{
                        width: '100%',
                        backgroundColor: severityColors[severity]?.backgroundColor,
                        color: severityColors[severity]?.color,
                    }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    );
};

export default LumSnackBar;