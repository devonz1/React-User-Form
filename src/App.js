import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/App.css';
import '../src/index.css';
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


      <div >
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
/*At the top of the Page We import all the component Routes so that they will be acessible
inside the react router . Without importing the components when a user clicks on one of the 
navigational links  on the site React won't be able to access the route to jump to
*/

/*line 22 we will be using React router   to route to different
pages based on the URL so that the user can navigate through
each component and navigate through the website. Each component has a route path
tied to its component and we use the element property and add the
component name directly into the element property so once the user clicks on a specific link
 in the navigation bar react knows which page to jump to or which component to jump to.
 
*/


export default App;


