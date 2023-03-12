import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {DeleteEntityDialogProps} from "./types";
import EntityAsList from "./EntityAsList";
import {ButtonGroup} from "@mui/material";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props}/>;
});

export default function DeleteEntityDialog(props: DeleteEntityDialogProps) {
    const handleClose = () => {
        props.setOpen(false);
    };

    const handleConfirm = () => {
        props.setOpen(false);
        if (props.targetRow) {
            props.onDelete(props.targetRow);
        }
    }

    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>Are you sure you want to delete this {props.entityTemplate.entityLabel} ? </DialogTitle>
                <DialogContent>
                    <EntityAsList targetRow={props.targetRow} entityTemplate={props.entityTemplate}/>
                </DialogContent>
                <DialogActions>
                    {/*make button group*/}
                    <ButtonGroup>
                        <Button onClick={handleClose} color={"info"} variant={"outlined"}>No</Button>
                        <Button onClick={handleConfirm} color={"error"} variant={"contained"}>Yes, Delete it !</Button>
                    </ButtonGroup>
                </DialogActions>
            </Dialog>
        </div>
    );
}