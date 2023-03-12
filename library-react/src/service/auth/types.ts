// interface for user logging in
interface UserSigningInInterface {
    username: string;
    password: string;
}


// interface for user logged in (after authentication)
// this contain the token and decoded token data

interface UserAuthenticatedInterface {
    token: string;
    issuedAt: number;
    expiresAt: number;
    username: string;
    roles: string[];
    email: string;
}
