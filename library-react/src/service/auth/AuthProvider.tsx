import * as React from "react";
import {libraryAuthProvider} from "./auth";

interface AuthContextType {
    user: UserAuthenticatedInterface;
    signIn: (user: UserSigningInInterface,
             onSuccessCallback: VoidFunction,
             onFailureCallback: (errorMsg: string) => void) => void;
    signOut: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth() {
    return React.useContext(AuthContext);
}

export default function AuthProvider({children}: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<any>(() => libraryAuthProvider.refreshUser());

    let signIn = (newUser: UserSigningInInterface,
                  onSuccessCallback: VoidFunction,
                  onFailureCallback: (errorMsg: string) => void) => {
        return libraryAuthProvider.signin(newUser, (authUser) => {
            setUser(authUser);
            onSuccessCallback();
        }, (error) => {
            setUser(null);
            onFailureCallback(error);
        });
    };

    let signOut = (callback: VoidFunction) => {
        return libraryAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = {user, signIn: signIn, signOut: signOut};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}