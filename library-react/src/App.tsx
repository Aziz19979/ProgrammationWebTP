import React from 'react';
import AuthProvider from "./service/auth/AuthProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RequireAuth from "./service/auth/RequireAuth";
import SignIn from "./components/auth/SignIn";
import MyDashboard from "./components/dashboard/MyDashboard";
import AppLayout from "./AppLayout";
import NotFoundPage from "./components/NotFoundPage";
import CrudTable from "./components/util/CrudTable";
import bookEntity from "./service/book/BookEntity";

function App() {
    return (
        // auth architecture based on https://github.com/remix-run/react-router/tree/dev/examples/auth
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route path="/login" element={<SignIn/>}/>
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <MyDashboard/>
                                </RequireAuth>
                            }
                        >
                            <Route path={"/books"} element={<CrudTable entityTemplate={bookEntity}/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
