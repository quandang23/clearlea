import '../../css/request.css'; 
import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify'; 
import { Authenticator } from '@aws-amplify/ui-react'; 
import '@aws-amplify/ui-react/styles.css'; 
import awsExports from '../../../aws-exports';
import { fetchUserAttributes } from 'aws-amplify/auth';
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

    const saveName = async () => {
        const nameTemp = localStorage.getItem('name');
        console.log(nameTemp); 
        if (nameTemp == null) {
            try {
                const userAttributes = await fetchUserAttributes();
                localStorage.setItem('name', userAttributes.name);
                set(); 
                //console.log('Email: ', userAttributes);
            } catch (e) {
                console.log(e);
            }
        }
        else {
            console.log("Name is: ", nameTemp); 
        }
    };

    const clearLocal = () => {
        end(); 
        window.location.href = "/request";
    }

    return (
        <div>
            <div className='request'>
                <section className='section'>
                    <div className='container'>
                        <p className='text'>Authentication</p>
                        <Authenticator>
                            {({ signOut, user }) => {
                                saveName();
                                return (
                                    <main>
                                        <h1>Hello {localStorage.getItem('name')|| "User"}</h1>
                                        <button onClick={() => { signOut(); clearLocal(); }}>Sign out</button>
                                        <button onClick={saveName}>Fetch User Details</button>
                                    </main>
                                );
                            }}
                        </Authenticator>
                    </div>
                </section>
            </div>
        </div>
    );
}; 

export default Request; 