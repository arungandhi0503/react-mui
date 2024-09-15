import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'; // For rendering child routes

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar will always be visible */}
      <Outlet /> {/* This Outlet renders the matched route component */}
    </div>
  );
}

export default App;
