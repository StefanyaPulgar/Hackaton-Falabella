import React from 'react'
import BasicData from './BasicData';
import { useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ShowEvents } from '../events-data/ShowEvents';


const Main = () => {

  const [profileData, setProfileData] = useState({});
  const [eventData, setEventData] = useState({});

  const addData = async (e) => {
    e.preventDefault();
    console.log("funcionando addData");
    try {
      const docRef = await addDoc(collection(db, 'dates'), {
        profile: { ...profileData },
        events: { ...eventData }


      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    setProfileData({});


  };
  return (
    <main>
      <pre>{JSON.stringify(profileData, null, 2)}</pre>
      <button onClick={addData}>agregar</button>
      <div >
        <BasicData
          setProfileData={setProfileData}
          profileData={profileData} />

        <ShowEvents
          eventData={eventData}
          setEventData={setEventData}
          addData={addData}
        />

      </div>

    </main>
  )
}
export default Main;