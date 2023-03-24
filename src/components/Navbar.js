import React from 'react';
import { NavLink } from 'react-router-dom';




const Nav = ()=> {
  return (
  
    <div >
      <ul>
        <li>
          <NavLink to='/admission'>Admissions</NavLink>
        </li>
        <li>
          <NavLink to='/classsched'>Class Schedule</NavLink>
        </li>
        <li>
          <NavLink to='/academics'>Academics</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>

    </div>
     
  );
}


export default Nav;


