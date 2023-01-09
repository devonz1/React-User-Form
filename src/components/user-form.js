import React from 'react';
 

 function user () {
  return(
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
        <label>PassWord</label>
        <input 
        type="password"
        className="form-control mt-1"
        placeholder  = "Enter Password"
        />
        </div>
        <div className ="d-grid gap-2 mt-3">
            <button type = "submit" classNAme="btn btn-primary">
                Submit
            </button>
             </div>

  </div>
  </form>
      </div>
  );
 }
 export default user;