import React from 'react';
import AuthProvider from "./service/auth/AuthProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RequireAuth from "./service/auth/RequireAuth";
import SignIn from "./components/auth/SignIn";
import MyDashboard from "./components/dashboard/MyDashboard";
import AppLayout from "./AppLayout";
import NotFoundPage from "./components/NotFoundPage";
import bookEntity from "./service/book/BookEntity";
import personEntity from "./service/person/PersonEntity";
import bookGenreEntity from "./service/book-genre/BookGenreEntity";
import CrudTable from "./components/generic-entity/CrudTable";
import borrowEntity from "./service/borrow/BorrowEntity";

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
                            <Route path={"/persons"} element={<CrudTable entityTemplate={personEntity}/>}/>
                            <Route path={"/book_genres"} element={<CrudTable entityTemplate={bookGenreEntity} readOnly={bookGenreEntity.isReadOnly}/>}/>
                            <Route path={"/borrows"} element={<CrudTable entityTemplate={borrowEntity}/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
