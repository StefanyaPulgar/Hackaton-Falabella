import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ShowEvents } from './components/events-data/ShowEvents';

import Layout from './components/layout-falabella/Layout'



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/event" element={<ShowEvents/>}/>
    </Routes>
    </>
    
  )
}

export default App;

