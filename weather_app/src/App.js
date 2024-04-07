import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
