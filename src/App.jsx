import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Event} from './components/events-data/Events'
import { ShowEvents } from './components/events-data/ShowEvents';
import SideBar from './components/layout-falabella/SideBar';
import BasicData from './components/profile-data/BasicData';
import Header from './components/layout-falabella/Header';

function App() {
  return (
    <>
    <SideBar/>
    <BasicData/>
    <Header/>
    <Routes>

      <Route path="/" element={<Event/>}/>
      <Route path="/event" element={<ShowEvents/>}/>
    </Routes>
    </>
    
  )
}

export default App;
