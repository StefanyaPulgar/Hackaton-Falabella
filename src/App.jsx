import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Event} from './components/events-data/Events'
import { ShowEvents } from './components/events-data/ShowEvents';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Event/>}/>
      <Route path="/event" element={<ShowEvents/>}/>
    </Routes>
    </>
    
     

   
  )
}

export default App;
