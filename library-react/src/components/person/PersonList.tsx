import React, { useEffect, useState } from 'react';
import {getPersons} from "../../service/person/PersonActions";

export default function PersonList() {
    const [persons, setPersons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({
        message: ''
    });

    useEffect(() => {
        getPersons()
            .then((response) => {
                setPersons(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error.message) {
        return <div>{error.message}
            <br/>
            <a href="/">Go back to home page</a>
        </div>;
    }
     console.log(persons);
    return (
        <div>
            <h1>Person List</h1>
            <ul>
                {persons.map(({personFirstname, personId}) => (
                    <li key={personId}>{personFirstname}</li>
                ))}
            </ul>
        </div>
    );
}