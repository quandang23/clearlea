import '../../css/request.css'; 
import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify'; 
import { Authenticator } from '@aws-amplify/ui-react'; 
import '@aws-amplify/ui-react/styles.css'; 
import awsExports from '../../../aws-exports';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';

Amplify.configure(awsExports);

const fetchNameAttribute = async () => {
    try {
      const user = await getCurrentUser();
      const attributes = await fetchUserAttributes(user);
      const nameAttr = attributes.find(attr => attr.Name === 'name');
      const name = nameAttr ? nameAttr.Value : null;
      console.log(`The name: ${name}`);
      return name;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

const Request = () => {
    const [userName, setUserName] = useState('');

    const handleFetchName = async () => {
        const name = await fetchNameAttribute();
        if (name) {
        setUserName(name);
        }
    };

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
                        <Authenticator>
                        {({ signOut, user }) => (
                            <main>
                                <h1>Hello {userName || "User"}</h1>
                                <button onClick={signOut}>Sign out</button>
                                <button onClick={handleFetchName}>Fetch User Details</button>
                            </main>
                        )}
                        </Authenticator>
                    </div>
                </section>
            </div>
        </div>
    );
}; 

export default Request; 