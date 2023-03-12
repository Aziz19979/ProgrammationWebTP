import axios from "axios";
import {API_URL} from "../../const/CommonConstants";

export function createUserDataFromLibraryToken(token: string): UserAuthenticatedInterface {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decodedToken = JSON.parse(window.atob(base64));
    return {
        token: token,
        issuedAt: decodedToken.iat,
        expiresAt: decodedToken.exp,
        username: decodedToken.username,
        roles: decodedToken.roles,
        email: decodedToken.email
    };
}

/**
 * This represents some generic auth provider API, like Firebase.
 */
const libraryAuthProvider = {
    signin(user: UserSigningInInterface,
           onSuccessCallback: (authUser: UserAuthenticatedInterface) => void,
           onFailureCallback: (error: string) => void) {
        axios.post(API_URL + '/api/login', user).then(r => {
                localStorage.setItem('library-token', r.data.token);
                onSuccessCallback(createUserDataFromLibraryToken(r.data.token));
            }
        ).catch(e => {
                if (!e.response) {
                    onFailureCallback("Le serveur ne repond pas. Est-ce que spring boot est lancé  (^_^)  ?")
                } else if (e.response.status === 403) {
                    onFailureCallback("Combinaison invalide de login et de mot de passe");
                } else {
                    onFailureCallback("Erreur non claire, Contacter le support pour voir les logs. " + e.response.status)
                }
            }
        );
    },
    signout(callback: VoidFunction) {
        localStorage.removeItem('library-token');
        callback();
    },

    refreshUser() : UserAuthenticatedInterface | null  {
        const token = localStorage.getItem('library-token');
        if (token) {
            const refreshedUser = createUserDataFromLibraryToken(token);
            if (refreshedUser.expiresAt > Date.now() / 1000) {
                // token not expired => return user
                return refreshedUser;
            } else {
                // if you want to refresh the token, you can do it here
                // currently system is not using refresh token

                // token expired => logout
                localStorage.removeItem('library-token');
                return null;
            }
        } else {
            // no token => logout
            return null;
        }
    }
};

export {libraryAuthProvider};
