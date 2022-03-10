import React from 'react'
import BasicData from './BasicData';
import { useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ShowEvents } from '../events-data/ShowEvents';
import styled from "styled-components";
import CreateProfile from './CreateProfile';
import { Event } from '../events-data/Events';
import ShowProfiles from './ShowProfiles';


const Main = ({ view, setView }) => {

  const [profileData, setProfileData] = useState({});
  const [eventData, setEventData] = useState({});
  const [showEvent, setShowEvent] = useState(false);

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

  const functionBtn = (e) => {
    addData(e)
    setView(3)
  }

  return (
    <>
    <ContainerMain>
      {/* <pre>{JSON.stringify(profileData, null, 2)}</pre> */}

      {view === 1 && <div><CreateProfile setView={setView} /></div>}


      {view === 2 && <div>

        <div><SectionProfile><BasicData
          setProfileData={setProfileData}
          profileData={profileData} /></SectionProfile>

        {showEvent === false &&
          <SectionEventBtn><Event setShowEvent={setShowEvent}
            eventData={eventData}
            setEventData={setEventData}
            addData={addData}
          /> </SectionEventBtn>}

        {showEvent && <SectionEvents><ShowEvents /></SectionEvents>}
        </div>
        {/* <ContainerBtns>
          <DeleteBtn>Cancelar</DeleteBtn>
          <CreateProfileBtn onClick={() => functionBtn()}>Crear perfil</CreateProfileBtn>
        </ContainerBtns> */}
      </div>}

      {view === 3 && <div><ShowProfiles /></div>}
      

    </ContainerMain >
    <ContainerBtns>
          <DeleteBtn>Cancelar</DeleteBtn>
          <CreateProfileBtn onClick={(e) => functionBtn(e)}>Crear perfil</CreateProfileBtn>
        </ContainerBtns>
    </>
    
  )
}

const SectionEventBtn = styled.div`
display: flex;
margin: 5%;
width: 100%;
`

const SectionEvents = styled.div`
display: flex;
margin: 5%;
width: 100%;
`
const SectionProfile = styled.div`
display: flex;
margin: 5%;
width: 100%;
// height: 80%;
// background: pink;
`

const ContainerMain = styled.main`
display:flex;
// justify-content: center;
flex-direction: row;
width: 100%;
height:165vh;
// background:green;
`

const ContainerBtns = styled.div`
display:flex;
justify-content:flex-end;
background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.2);
// width: 68vw;
width: 100%;
height: 16vh;
align-items: center;
`

const DeleteBtn = styled.button`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 1rem;
text-decoration-line: underline;
color: #888888;
border: none;
outline: none;
Background:transparent;
cursor: pointer;
margin-right: 2%;

&:hover  {
  color: #FF6200;
  // display: none;
}
`
const CreateProfileBtn = styled.button`
background: #495867;
padding: 8px 24px 9px;
border:none;
outline: none;
width: 14vw;
color: #FFFFFF;
cursor: pointer;
background: #BBBBBB;
border-radius: 24px;
margin:2%;

font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 1rem;

color: #FFFFFF;

&:hover  {
  background: #FF6200;
  // display: none;
}
`

export default Main;
