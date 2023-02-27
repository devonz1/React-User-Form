import React from 'react';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/App.css';
import Nav from './components/Navbar'; /*this will import the
code from the nav component into app.js*/
 
 

function App() {
  return (
    <> 
   <Nav />
        <div className="Auth-form-container">
    <form className="Auth-form">
<div className="Auth-form-content">
<div className="form-group mt-3">
    <label>Username</label>
    <input type= "text"  name="username" 
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
          <button>Log In</button>
          
        </div>
         </div>
         </form>
  </div>
      </>
   );    
  }

  

 export default App;
 
 
