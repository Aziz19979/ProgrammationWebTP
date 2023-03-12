import EntityTemplate from "../../service/util/EntityTemplate";
import {GridRowParams} from "@mui/x-data-grid";

export interface CrudTableProps {
    entityTemplate: EntityTemplate
}


export interface DeleteEntityDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    targetRow: GridRowParams | null;
    entityTemplate: EntityTemplate;
    onDelete: (targetRow: GridRowParams) => void;
}


export interface EntityAsListProps {
    targetRow: GridRowParams | null;
    entityTemplate: EntityTemplate;
}