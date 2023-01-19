import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import {Routes, Route} from 'react-router';
import SignIn from './pages/SignIn';

import Home from './pages/Home';


function App() {
  return (
    <Routes>
     
    <Route exact path='/signin' element={<SignIn/>}/>

  
      
      <Route exact path='/' element={<Home/>}/>

      
    </Routes>
  );
}

export default App;
