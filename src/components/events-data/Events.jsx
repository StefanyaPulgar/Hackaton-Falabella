// import React, { useState } from 'react'
import styled from 'styled-components'
// import { ShowEvents } from './ShowEvents'
import { Link } from "react-router-dom";
import changeComponent from '../layout-falabella/prueba';


export const Event = () => {

    // const [stateEvent, setStateEvent] = useState(false);

    // const changeComponent = (option) => {
    //     switch(option) {
    //         case "principal": 
    //         return <Event/>;
    //         case "evento":
    //         return <BasicData/>
    //     }
    // }

    return (
        <>

        <EventContainer>
        <h1>Eventos e intereses</h1>
            <AddEvent>
                <h3>Agrega un evento para tu persona favorita</h3>
                    {/* <Link to="/event"> */}
                      <ButtonEvent >Agregar evento</ButtonEvent>

                    {/* </Link> */}
            </AddEvent>
        </EventContainer>

        </>
    )
}

const EventContainer = styled.section`
display: flex;
flex-direction: column;
position: absolute;
width: 65.2vw;
height: auto;
background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.2);
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 400;
h1 {
    font-size: 1.5vw;
    font-weight: 400;
}
/* left:32.8vw;
top:52.8vw; */
`;

const AddEvent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h3 {
    font-weight: 400;
font-size: 1.25vw;
}
`

const ButtonEvent = styled.button`
background: rgb(73,88,103);
border-radius: 1.8vw;
color: #FFFFFF;
border: none;
width: 16.4vw;
height: 6vh;
font-size: 1.4vw;
margin-bottom:2vh ;
`;