import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/App.css';
import'../src/index.css';
import Nav from './components/Navbar'; /*this will import the
code from the nav component into app.js*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logn from './components/logn';
import Academ from './components/academics';
import Admiss from './components/admission';
import Classc from './components/classsched';
import About from './components/about';
  

function App() {

  <Logn />
  
  return (
    <>

      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Logn />} />
            <Route path='/academics' element={<Academ />} />
            <Route path='/admission' element={<Admiss />} />
            <Route path='/classsched' element={<Classc />} />
            <Route path='/about' element= {<About />} />
          </Routes>


        </BrowserRouter>

      </div>

    </>
  );
}
 /*line 22 we will be using React router so that the user can navigate through
 each component to navigate through the website. Each component has a route path
 tied to its component and we use the element property and add the
 component name directly into the element property so once the user clicks on a specific link
  in the navigation bar react knows which page to jump to or which component to jump to.
 
 */


export default App;


