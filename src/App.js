// src/App.js  
import React, { useEffect, useState } from 'react';  
import axios from 'axios';  

function App() {  
  const [user, setUser] = useState(null);  
  const [error, setError] = useState(null);  

  useEffect(() => {  
    axios.get('http://localhost:5000/api/user')  
      .then(response => {  
        setUser(response.data);  
      })  
      .catch(err => {  
        setError(err);  
      });  
  }, []);  

  return (  
    <div>  
      <h1>User Info</h1>  
      {error && <p>Error fetching user info: {error.message}</p>}  
      {user ? (  
        <div>  
          <p>Email: {user.username+'@example.com'}</p>       
        </div>  
      ) : (  
        <p>Loading user info...</p>  
      )}  
    </div>  
  );  
}  

export default App;