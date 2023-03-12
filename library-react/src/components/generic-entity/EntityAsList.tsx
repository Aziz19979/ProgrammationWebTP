import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {EntityAsListProps} from "./types";

export default function EntityAsList(props: EntityAsListProps) {
    if (props.targetRow === null) {
        return <div>No target row data is sent !</div>
    }
    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <nav aria-label="main mailbox folders">
                <List>
                    {
                        props.entityTemplate.fields.map((field) => {
                            return (
                                <ListItem
                                    key={field.name}
                                >
                                    {field.label} : {props?.targetRow?.row[field.name]}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </nav>
        </Box>
    );
}