import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null); 
  const [name, setName] = useState(""); 
  const [temp, setTemp] = useState(false); 

  /* Successfull log in, saving the name globally, redirect to main page */
  const set = () => {
    setIsLoggedIn(true); 
  };

  /* Logout function */
  const end = async () => {
    // Call the doublecheck function
    //await doublecheck(); 
    // Clear the token from state or context
    //setToken(null);
    // Clear the local storage
    localStorage.clear();
    // Perform logout logic here
    setIsLoggedIn(false);
    //await doublecheck(); 
  };

  /* Doublecheck function */
  const doublecheck = async () => {
    console.log("Token:", token); 
    console.log("Name:", localStorage.getItem('name')); 
    console.log("Auth Token:", localStorage.getItem('authToken')); 
    console.log("Is Logged In:", isLoggedIn); 
  };

//   //successful log in 
//   else {
//     setToken(data); 
//     updateName(profile.name); 
//     setIsLoggedIn(true);
//     window.location.href = "/"; 
// }

  // after recieving token, hence, verified, save token, name and email to maintain if page reloads 
//   useEffect(() => {
//     if (token) {
//         localStorage.setItem('authToken', token);
//         localStorage.setItem('name', profile.given_name); 
//         localStorage.setItem('email', profile.email); 
//     }
//   }, [token]); 

//   useEffect(() => {
//     if (token) {
//       // Redirect after token is set
//       window.location.href = "/";
//     }
//   }, [token]);
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, name, set, end}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);