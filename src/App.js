import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/App.css';
  
 
 


 
 
function App() {
  return (
        <div className="Auth-form-container">
    <form className="Auth-form">
<div className="Auth-form-content">
<div className="form-group mt-3">
    <label>Username</label>
    <input 
    type="username"
    className= "form-control mt-1"
    placeholder = "Enter username"
    />
    </div>
    <div className="form-group mt-3"> 
    <label>Password</label>
    <input 
    type="password"
    className="form-control mt-1"
    placeholder  = "Enter Password"
    />
    </div>
      <div> 
          <h3>Log In</h3>
          
        </div>
         </div>
         </form>
  </div>

   );    
  }

  

 export default App;
 
 
