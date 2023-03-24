import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/App.css';
import Nav from './components/Navbar'; /*this will import the
code from the nav component into app.js*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logn from './components/logn';
import Academ from './components/academics';
import Admiss from './components/admission';
import Classc from './components/classsched';
import About from './components/about';


function App() {


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
            <Route path='/about' element={<About />} />
          </Routes>


        </BrowserRouter>

      </div>

    </>
  );
}



export default App;


