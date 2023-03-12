import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MyCopyright from "../footer/MyCopyright";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../service/auth/AuthProvider";

export default function SignIn() {
    const [error, setError] = React.useState<string | null>(null);
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = {
            username: data.get('username') as string,
            password: data.get('password') as string,
        }

        auth.signIn(user, () => {
                // Send them back to the page they tried to visit when they were
                // redirected to the login page. Use { replace: true } so we don't create
                // another entry in the history stack for the login page.  This means that
                // when they get to the protected page and click the back button, they
                // won't end up back on the login page, which is also really nice for the
                // user experience.
                setError(null);
                navigate(from, {replace: true});
            },
            (error) => {
                setError(error);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                    {/* allow to continue sign in with existing user from saved token */}
                    {auth.user &&
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color={"secondary"}
                            sx={{mt: 3, mb: 2}}
                            onClick={() => {
                                setError(null);
                                navigate(from, {replace: true});
                            }}
                        >
                            Continue with {auth.user.username}
                        </Button>
                    }

                    {/*display error message based on error state */}
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <MyCopyright sx={{mt: 8, mb: 4}}/>
        </Container>
    );
}