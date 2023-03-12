import * as React from 'react';
import Box from '@mui/material/Box';
import Alert, {AlertColor} from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {AlertTitle} from "@mui/material";

interface TransitionAlertProps {
    message: string;
    setMessage: (message: string) => void;
    severity: AlertColor;
}

export default function TransitionAlert(props: TransitionAlertProps) {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{width: '100%'}}>
            <Collapse in={open}>
                <Alert
                    severity={props.severity}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                                props.setMessage('');
                            }}
                        >
                            <CloseIcon fontSize="inherit"/>
                        </IconButton>
                    }
                    sx={{mb: 2}}
                >
                    <AlertTitle>
                        {props.severity}
                    </AlertTitle>

                    {props.message}
                </Alert>
            </Collapse>
        </Box>
    );
}