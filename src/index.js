import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import '../src/index.css';
import App from './pages/home/index';
import Survey from './pages/home/survey'
import Header from './pages/Header';
import Result from  './pages/Results'
import Freelance from './pages/Freelances';
import Error from './components/Error';




// Rendre l'application
ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element ={<App/>}></Route>
            <Route path='/survey/:questionID' element ={<Survey/>}></Route>
            <Route path='/freelance' element ={<Freelance/>}></Route>
            <Route path='/result' element={<Result/>}></Route>
            <Route path='*' element={<Error/>}></Route>

        </Routes>
    </Router>
  </React.StrictMode> ,document.getElementById('root')
);