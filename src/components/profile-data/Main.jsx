import React from 'react'
import BasicData from './BasicData';
import { Event } from '../events-data/Events';
import { useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";


 const Main  = () => {
    const [nombre, cambiarNombre] = useState('');
  const [profileData , setProfileData]= useState({});
  
    const addData = async (e) => {
          e.preventDefault();
          console.log("funcionando addData");
          try {
            const docRef = await addDoc(collection(db, 'dates'), {
              nombre: nombre,
            });
            console.log('Document written with ID: ', docRef.id);
          } catch (e) {
            console.error('Error adding document: ', e);
          }
          cambiarNombre('');
          
        
        };
  return (
    <main>
<form onSubmit={(e) => addData(e)}>
      {/*  <BasicData
        setProfileData={setProfileData}
        profileData={profileData}/>
        */} 
        <Event/>
        <button type= "submit">agregar</button>
        </form>
    </main>
  )
}
export default Main;