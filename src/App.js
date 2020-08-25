import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

import './GlobalStyles.scss'

const App = () => {
    return (          
       <Router>
         <Header/>
         <Main/>
       </Router>
    )   
}

export default App