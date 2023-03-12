import {GridColType} from "@mui/x-data-grid";

export interface FieldInterface {
    /**************************  Common parameters **************************/
    // field name to be used as variable name
    name: string;
    label: string;

    /**************************  Form parameters **************************/
    // if type is select, then options is required
    inputType: string;
    options?: any[];

    required?: boolean;
    // return null if valid, otherwise return error message
    validationCallback?: (value: any) => string;


    /**************************  Grid data table parameters **************************/
    gridColType?: GridColType;
    visible?: boolean;

    width?: number;

    valueFormatter?: (value: any) => string;
}