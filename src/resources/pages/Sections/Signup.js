import '../../css/request.css'; 
import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify'; 
import { Authenticator } from '@aws-amplify/ui-react'; 
import '@aws-amplify/ui-react/styles.css'; 
import { useAuth } from '../Api/AuthContext.js';
import awsExports from '../../../aws-exports';
Amplify.configure(awsExports);

const Signup = () => {

    const { name, set, end } = useAuth();

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
                        <p className='text'>Authentication</p>
                        <Authenticator>
                            {({ signOut, user }) => {
                                <main>
                                    <h1>Hello {user.username}</h1>
                                    <button onClick={signOut}>Sign out</button>
                                </main>
                            }}
                        </Authenticator>
                    </div>
                </section>
            </div>
        </div>
    );
}; 

export default Signup; 