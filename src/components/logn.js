
import { useState } from "react";
 import { Button } from "bootstrap";
 
 
 

const  Logn= () =>{
        const [username, setUsername] = useState();
        const [password, setPassword]= useState();

       const handleSubmit=(e)=>{
        e.preventDefault();
         
       };

        

      
    return(
        
        <div className="Auth-form-container">
        <form onSubmit={handleSubmit} autocomplete="off" className="Auth-form">
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


   <button className="btn btn-primary">Log In</button>
           
     </form>
        
        
        
          </div>
         
        
            
             
            
     
       );
       };
  
    
 
 

export default Logn;

