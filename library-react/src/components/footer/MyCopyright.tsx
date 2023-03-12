import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export default function MyCopyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Ecn-Library
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}