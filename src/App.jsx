import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ShowEvents } from './components/events-data/ShowEvents';
import Layout from './components/layout-falabella/Layout'
import ShowProfiles from './components/profile-data/ShowProfiles';



function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/event" element={<ShowEvents/>}/>
      <Route path="/ShowProfiles" element={<ShowProfiles/>}/>

    </Routes>

    </>
    
  )
}

export default App;

