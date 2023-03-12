import {useNavigate} from "react-router-dom";
import * as React from "react";
import {useAuth} from "../../service/auth/AuthProvider";

export default function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <p>
            Welcome {auth.user.username}!{" "}
            <button
                onClick={() => {
                    auth.signOut(() => navigate("/"));
                }}
            >
                Sign out
            </button>
        </p>
    );
}