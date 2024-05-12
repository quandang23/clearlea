// import React from 'react';
// import { Amplify } from 'aws-amplify';

// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

// export default function App() {
//   return (
//     <Authenticator>
//       {({ signOut, user }) => (
//         <main>
//           <h1>Hello {user.username}</h1>
//           <button onClick={signOut}>Sign out</button>
//         </main>
//       )}
//     </Authenticator>
//   );
// }

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './resources/pages//Sections/Navbar';
import BottomNav from './resources/pages/Sections/BottomNav';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <BottomNav />
      </BrowserRouter>
    </div>
  );
}

export default App;