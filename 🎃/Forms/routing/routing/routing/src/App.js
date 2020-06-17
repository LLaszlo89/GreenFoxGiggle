import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './comonents/Navbar'
import Home from './comonents/Home'
import Contact from './comonents/Contact'
import About from './comonents/About'
import { BrowserRouter , Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Route path='/Home' component={Home} />
    <Route path='/About' component={About} />
    <Route path='/Contact' component={Contact} />
    
    </div>
    </BrowserRouter>
  );
}

export default App;
