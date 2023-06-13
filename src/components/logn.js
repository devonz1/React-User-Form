
import React, { useState } from "react";
 import Image from "../images/background1.jpg";
 import LogCSS from "../components/login.module.css";
 

const  Logn= () =>{
        const [username, setUsername] = useState("");
        const [password, setPassword,]= useState("");
         
       const handleSubmit=(e)=>{
        e.preventDefault(); 
        const setPasswordError=("")
        const passwordPattern= /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
          
         if(!passwordPattern.test(password)){
        setPasswordError("Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.");
          return;
         }
          
         alert("Signed in Sucessfully");
        };
         const img=[
          {
            url:Image
          },

         ];
        

        
    return(
          
          
        <div className="Auth-form-container">
        <form onSubmit={handleSubmit} autoComplete="off" className="Auth-form app">
           <h1>Sign-in</h1>
           <div className="flex-container form-group row">
           <label className="col-sm-3 col-form-label">Username</label>
           <input className="form-control form-control-sm"
           type="username"
           name="username"
           value={username}
           placeholder="Enter Username..."
           onChange={(e)=> setUsername(e.target.value)}
   />
         </div>
         <div className="flex-container form-group row">
          <label className="col-sm-3 col-form-label"> Password</label>
          <input className="form-control form-control-sm"
           type="password"
           name="password"
           value={password}
           placeholder="Enter a strong password"
           onChange={(e) => setPassword(e.target.value)}
   /> 
      
   </div>
    
   <button type="submit" className="btn btn-primary">Log In</button>
    
   
     </form>  
      
          </div>  
          
           
       );
        
       };
        

export default Logn;

/* line 16 we will test to see if the user password meets
the password pattern requirement . Were passing in password as the argument and the logical
operator to see if the pattern returns true or false if false it will display
a error message if the password doesn't fit the requirements if true the User will be
 allowed to sign in*/