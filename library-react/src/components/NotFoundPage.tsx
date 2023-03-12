import React from "react";
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
            <div style={{textAlign: "center",}}>
                <Typography variant="h1" gutterBottom>
                    404
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Page not found
                </Typography>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        </div>
    );
};

export default NotFoundPage;
