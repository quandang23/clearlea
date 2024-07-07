import '../../css/request.css'; 
import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify'; 
import '@aws-amplify/ui-react/styles.css'; 
import awsExports from '../../../aws-exports';
import { useAuth } from '../Api/AuthContext';

Amplify.configure(awsExports);

const Request = () => {
    
    const {name, set, end} = useAuth();

    useEffect(() => {
        const temp = localStorage.getItem('name'); 
        if (temp) {
            set(); 
        }
    }, []);

    return (
        <div>
            <div className='request'>
                <section className='section'>
                    <div className='container'>
                        <p className='text'>Request</p>
                    </div>
                </section>
            </div>
        </div>
    );
}; 

export default Request; 