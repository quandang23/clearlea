import '../../css/request.css'; 
import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify'; 
import { Authenticator } from '@aws-amplify/ui-react'; 
import '@aws-amplify/ui-react/styles.css'; 

import awsExports from '../../../aws-exports';
Amplify.configure(awsExports);

// import { useAuth } from '../Api/AuthContext.js';

const Signup = () => {

    // variable to keep track of log in state 
    // const {isLoggedIn, token, name, login, set, end} = useAuth();

    // useEffect(() => {
    //     const authToken = localStorage.getItem('authToken');
    //     console.log(authToken); 
    //     if (authToken) {
    //         // Set isLoggedIn to true if token is present
    //         set();
    //     }
    // }, []);

    return (
        <div>
            <div className='request'>
                <section className='section'>
                    <div className='container'>
                        <p className='text'>Authentication</p>
                        <Authenticator 
                            initialState="signUp" 
                        >
                        {({ signOut, user }) => (
                            <main>
                                <h1>Hello {user.username}</h1>
                                <button onClick={signOut}>Sign out</button>
                            </main>
                        )}
                        </Authenticator>
                    </div>
                </section>
            </div>
        </div>
    );
}; 

export default Signup; 