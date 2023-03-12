import * as React from 'react';
import {
    DataGrid,
    GridActionsCellItem, GridAddIcon,
    GridColDef,
    GridRowParams,
    GridRowsProp
} from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {CrudTableProps} from "./types";
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import TransitionAlert from "./TransitionAlert";
import DeleteEntityDialog from "./DeleteEntityDialog";
import {IconButton, Typography} from "@mui/material";

export default function CrudTable(props: CrudTableProps) {
    const entityTemplate = props.entityTemplate;
    const readOnly = props.readOnly;

    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | null>(null);
    const [successMsg, setSuccessMsg] = React.useState<string | null>(null);

    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState<boolean>(false);

    const [rows, setRows] = React.useState<GridRowsProp>([]);
    const [targetRow, setTargetRow] = React.useState<GridRowParams | null>(null);

    React.useEffect(() => {
        setLoading(true);
        entityTemplate.crudActions.getAll().then((response) => {
            setRows(entityTemplate.convertDataArrayToGridRows(response.data));
        }).catch(e => {
            console.log(e)
            setError(e.message);
        }).finally(() => {
            setLoading(false);
        });
    }, [entityTemplate])


    const deleteEntity = React.useCallback((targetRowParam: GridRowParams) => {
        setLoading(true);
        const entityId = targetRowParam.row[entityTemplate.entityIdentifier.name];
        entityTemplate.crudActions.delete(entityId).then((response) => {
            setRows((rows) => rows.filter((row) => row.id !== targetRowParam.id));
            setSuccessMsg(`Deleted ${entityTemplate.entityLabel} with id ${entityId}`);
        }).catch(e => {
            console.log(e)
            setError(e.message);
        }).finally(() => {
            setLoading(false);
        });
    }, [entityTemplate]);

    const showDeleteEntityDialog = React.useCallback((targetRow: GridRowParams) => {
        return () => {
            setTargetRow(targetRow);
            setDeleteDialogOpen(true);
        }
    }, []);

    const updateEntity = React.useCallback((targetRow: GridRowParams) => {
        return () => {
            setLoading(true);
            const entity = targetRow.row;
            const entityId = entity[entityTemplate.entityIdentifier.name];

            entityTemplate.crudActions.update(entityId, entity).then(r => {
                setRows((rows) => rows.map((row) => {
                    if (row.id === targetRow.id) {
                        return entity;
                    }
                    return row;
                }));
                setSuccessMsg(`Updated ${entityTemplate.entityLabel} with id ${entityId}`);
            }).catch(e => {
                console.log(e)
                setError(e.message);
            }).finally(() => {
                setLoading(false);
            });
        }
    }, [entityTemplate]);

    const copyEntity = React.useCallback((targetRow: GridRowParams) => {
        return () => {
            setLoading(true);
            const entity = targetRow.row;
            entityTemplate.crudActions.create(entity)
                .then(r => {
                    setRows((rows) => [...rows, entityTemplate.convertDataToGridRow(r.data)]);
                    setSuccessMsg(`Created ${entityTemplate.entityLabel} with id ${r.data[entityTemplate.entityIdentifier.name]}`);
                }).catch(e => {
                console.log(e)
                setError(e.message);
            }).finally(() => {
                setLoading(false);
            });
        }
    }, [entityTemplate]);


    const columns = React.useMemo<GridColDef[]>(
        () => {
            if (readOnly) {
                return [
                    ...entityTemplate.convertFieldsToGridColumns()
                ]
            } else return [
                ...entityTemplate.convertFieldsToGridColumns(),
                {
                    field: 'actions',
                    type: 'actions',
                    width: 80,
                    getActions: (params) => [
                        <GridActionsCellItem
                            key="delete"
                            icon={<DeleteIcon/>}
                            label="Delete"
                            onClick={showDeleteEntityDialog(params)}
                        />,
                        <GridActionsCellItem
                            key="update"
                            icon={<SecurityIcon/>}
                            label="Update Entity"
                            onClick={updateEntity(params)}
                            showInMenu
                        />,
                        <GridActionsCellItem
                            key="copy"
                            icon={<FileCopyIcon/>}
                            label="Duplicate Entity"
                            onClick={copyEntity(params)}
                            showInMenu
                        />,
                    ],
                }
            ]
        },
        [readOnly, entityTemplate, showDeleteEntityDialog, updateEntity, copyEntity],
    );

    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 120,
                    }}
                >
                    <Typography variant="h6" gutterBottom component="div">
                        List of {entityTemplate.entityLabelPlural}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        Total: {rows.length}
                    </Typography>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3} hidden={readOnly}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 120,
                    }}
                >
                    <Typography variant="h6" gutterBottom component="div">
                        {entityTemplate.entityLabel} Actions
                    </Typography>
                    <IconButton
                        aria-label="create"
                        onClick={() => {
                            console.log("create")
                        }}
                    >
                        <GridAddIcon/>
                        Create a new {entityTemplate.entityLabel}
                    </IconButton>
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    {/*delete entity dialog */}
                    <DeleteEntityDialog
                        open={deleteDialogOpen}
                        setOpen={setDeleteDialogOpen}
                        targetRow={targetRow}
                        entityTemplate={entityTemplate}
                        onDelete={deleteEntity}
                        />

                    {/*display error message */}
                    {error && <TransitionAlert message={error} setMessage={setError} severity={"error"}/>}
                    {/*display success message */}
                    {successMsg &&
                        <TransitionAlert message={successMsg} setMessage={setSuccessMsg} severity={"success"}/>}
                    <div style={{height: 500, width: '100%'}}>
                        <DataGrid
                            initialState={{
                                columns: {
                                    columnVisibilityModel: entityTemplate.fields.reduce((obj: any, field) => {
                                        obj[field.name] = field.visible;
                                        return obj;
                                    }, {}),
                                },
                            }}
                            loading={loading}
                            rows={rows}
                            columns={columns}
                        />
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}
