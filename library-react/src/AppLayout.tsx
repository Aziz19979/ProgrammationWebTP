import React from "react";
import {Outlet} from "react-router-dom";

export default function AppLayout() {
    return (
        // currently no wrapper around the app, but we could add one here
        // Renders the child route's element, if there is one.
        <Outlet />
    );
}