import {GridColType, GridValueGetterParams} from "@mui/x-data-grid";
import {ValueOptions} from "@mui/x-data-grid/models/colDef/gridColDef";
import {GridValueOptionsParams} from "@mui/x-data-grid/models/params/gridValueOptionsParams";

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
    valueGetter?: (params: GridValueGetterParams<any, any>) => any;
    valueFormatter?: (value: any) => string;

    // if type is gridColType is single-select, then value options is required
    valueOptions?: Array<ValueOptions> | ((params: GridValueOptionsParams) => Array<ValueOptions>);
}