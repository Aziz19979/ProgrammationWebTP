import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {useNavigate} from "react-router-dom";

export const MainListItems = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/books")}>
                <ListItemIcon>
                    <MenuBookIcon/>
                </ListItemIcon>
                <ListItemText primary="Books"/>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/book_genres")}>
                <ListItemIcon>
                    <MenuBookIcon/>
                </ListItemIcon>
                <ListItemText primary="Book Genre"/>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/persons")}>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Persons"/>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/borrows")}>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Borrows"/>
            </ListItemButton>
        </React.Fragment>
    )
};

export const SecondaryListItems = () => {
    return (
        <React.Fragment>
        </React.Fragment>
    )
};