import CrudActions from "./CrudActions";
import {GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {FieldInterface} from "./types";

export default class EntityTemplate {
    isReadOnly: boolean = false;
    entityLabel: string;
    entityLabelPlural: string;
    crudActions: CrudActions;

    entityIdentifier: FieldInterface;

    fields: FieldInterface[];

    constructor(entityLabel: string,
                entityLabelPlural: string,
                baseEntityUrl: string,
                id: FieldInterface,
                fields: FieldInterface[]) {
        this.entityLabel = entityLabel;
        this.entityLabelPlural = entityLabelPlural;
        this.crudActions = new CrudActions(baseEntityUrl);
        this.entityIdentifier = id;
        this.fields = fields;
    }

    convertFieldsToGridColumns(): GridColDef[] {
        return this.fields.map((field) => {
            return {
                field: field.name,
                headerName: field.label,
                type: field.gridColType ? field.gridColType : undefined,
                visible: field.visible ? field.visible : true,
                width: field.width ? field.width : 150,
                valueGetter: field.valueGetter ? field.valueGetter : undefined,
                valueFormatter: field.valueFormatter ? field.valueFormatter : undefined,
                valueOptions: field.valueOptions ? field.valueOptions : undefined,
            }
        });
    }

    convertDataArrayToGridRows(data: []): GridRowsProp {
        return data.map((item: any) => {
            return this.convertDataToGridRow(item);
        });
    }

    convertDataToGridRow(data: any): GridRowsProp {
        return {
            id: data[this.entityIdentifier.name],
            ...data
        }
    }
}