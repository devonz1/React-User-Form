
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 



const  Logn= () =>{
        const [username, setUsername] = useState();
        const [password, setPassword]= useState();

      const navigate= useNavigate('/academics');

    return(
        <>
        <div className="Auth-form-container">
        <form className="Auth-form">
    <div className="Auth-form-content">
    <div className="form-group mt-3">
        <label>Username</label>
        <input type= "text"  name="username" required
        className= "form-control mt-1"
        placeholder = "Enter username"
        />
        </div>
        <div className="form-group mt-3"> 
        <label>Password</label>
        <input type="password" id="pwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}"
          title="password must contain five or more characters with at least one number, one
          uppercase and lowercase letter "
        className="form-control mt-1"
        placeholder  = "Enter Password"
        />
        </div>
          <div> 
              <button onClick={navigate} >Log In</button>
              
            </div>
             </div>
             </form>
      </div>
  </>
    )
}


export default Logn;

