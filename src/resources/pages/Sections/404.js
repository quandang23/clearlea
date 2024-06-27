import React, { useEffect } from 'react';
import { useAuth } from '../Api/AuthContext';

const NoPage = () => {

    const { name, set, end } = useAuth();

    useEffect(() => {
        const temp = localStorage.getItem('name'); 
        if (temp) {
            set(); 
        }
    }, []);

    return (
        <h1>Error</h1>
    ); 
}; 

export default NoPage; 