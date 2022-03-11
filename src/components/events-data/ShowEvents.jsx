import styled, { css } from "styled-components";
import React from "react";
import cumpleaños from "../../icons/present.svg";
import aniversario from "../../icons/celebration.svg";
import navidad from "../../icons/tree.svg";
import vacaciones from "../../icons/vacation.svg";
import fpatria from "../../icons/flag.svg";
import fechaEspecial from "../../icons/specialdate.svg";
import calendario from "../../icons/calendar.svg";

export const ShowEvents = ({ eventData, setEventData, addData }) => {

  return (
    <EventContainer>
      <h1>Eventos e intereses</h1>
      <AddEvent>
        <ContainerEvent>
          <AddCelebration>
            <ContainerCelebration>

              <img src={calendario} alt="Calendario" />
              <h3>Agregar celebracion</h3>
            </ContainerCelebration>
          </AddCelebration>
          <section>
            <Titles>Estamos celebrando:</Titles>
            <AllContainerIcons>
            <ContainerIcons  secondary={eventData.evento ==="Cumpleaños"} onClick={() => setEventData({ ...eventData, evento: "Cumpleaños" })}>
            
            <img src={cumpleaños} alt="Cumpleaños" />
            <span>Cumpleaños</span>
          </ContainerIcons>
          <ContainerIcons secondary={eventData.evento ==="Aniversario"} onClick={() => setEventData({ ...eventData, evento: "Aniversario" })}>
            <img src={aniversario} alt="Aniversario" />
            <span>Aniversario</span>
          </ContainerIcons>
          <ContainerIcons secondary={eventData.evento ==="Navidad"} onClick={() => setEventData({ ...eventData, evento: "Navidad" })}>
            <img src={navidad} alt="Navidad" />
            <span>Navidad</span>
          </ContainerIcons>
          <ContainerIcons secondary={eventData.evento ==="Vacaciones"} onClick={() => setEventData({ ...eventData, evento: "Vacaciones" })}>
            <img src={vacaciones} alt="Vacaciones" />
            <span>Vacaciones</span>
          </ContainerIcons>
          <ContainerIcons secondary={eventData.evento ==="Fiestas patrias"} onClick={() => setEventData({ ...eventData, evento: "Fiestas patrias" })}>
            <img src={fpatria} alt="Fiestas patrias" />
            <span>18 de Sept.</span>
          </ContainerIcons>
          <ContainerIcons  secondary={eventData.evento ==="Fecha especial"} onClick={() => setEventData({ ...eventData, evento: "Fecha especial" })}>
            <img src={fechaEspecial} alt="Fecha especial" />
            <span>Fecha especial</span>
          </ContainerIcons>

            </AllContainerIcons>

          </section>

          <AllContainerIntereses>
            <Titles> Mis intereses son:</Titles>
            <ContainerIntereses>
              <Button secondary={eventData.intereses === "ROPA"} onClick={() => setEventData({ ...eventData, intereses: "ROPA" })}>ROPA</Button>
              <Button secondary={eventData.intereses === "PERFUMES" } onClick={() => setEventData({ ...eventData, intereses: "PERFUMES" })}>PERFUMES</Button>
              <Button secondary={eventData.intereses === "ZAPATILLAS"}  onClick={() => setEventData({ ...eventData, intereses: "ZAPATILLAS" })}>ZAPATILLAS</Button>
              <Button secondary={eventData.intereses === "JUGUETES"}  onClick={() => setEventData({ ...eventData, intereses: "JUGUETES" })}>JUGUETES</Button>
              <Button secondary={eventData.intereses ===  "TECNOLOGIA"}  onClick={() => setEventData({ ...eventData, intereses: "TECNOLOGIA" })}>TECNOLOGIA</Button>
              <Button secondary={eventData.intereses === "LIVING"}  onClick={() => setEventData({ ...eventData, intereses: "LIVING" })}>LIVING</Button>
              <Button secondary={eventData.intereses === "ACCESORIOS"}  onClick={() => setEventData({ ...eventData, intereses: "ACCESORIOS" })}>ACCESORIOS</Button>
              <Button secondary={eventData.intereses === "ARTICULOS DE BELLEZA"}  onClick={() => setEventData({ ...eventData, intereses: "ARTICULOS DE BELLEZA" })}>ARTICULOS DE BELLEZA</Button>
              <Button secondary={eventData.intereses === "DECOHOGAR"}  onClick={() => setEventData({ ...eventData, intereses: "DECOHOGAR" })}>DECOHOGAR</Button>
              <Button secondary={eventData.intereses === "OTRO"} onClick={() => setEventData({ ...eventData, intereses: "OTRA ¿CUAL?" })} >OTRO</Button>
            </ContainerIntereses>
          </AllContainerIntereses>

          <AllContainerIntereses>
            <Titles>Quiero recibir sugerencias de regalo</Titles>
            <ContainerIntereses>
              <Button secondary={eventData.notificacion === "15 días antes"} onClick={() => setEventData({ ...eventData, notificacion: "15 días antes" })}>15 días antes</Button>
              <Button  secondary={eventData.notificacion === "20 días antes"} onClick={() => setEventData({ ...eventData, notificacion: "20 días antes" })}>20 días antes</Button>
              <Button secondary={eventData.notificacion === "1 mes antes" } onClick={() => setEventData({ ...eventData, notificacion: "1 mes antes" })}>1 mes antes</Button>
            </ContainerIntereses>
          </AllContainerIntereses>
        </ContainerEvent>
      </AddEvent>
    </EventContainer>
  );
};

const EventContainer = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  // width: 73.3vw;
  width:65vw;
  // height: 48.1vh;
  height: 70%;
  background: #ffffff;
  // background: blue;
  box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.2);
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  h1 {
    font-size: 1.5vw;
    font-weight: 400;
    margin-left: 0.5vw;
  }
`;

const AddEvent = styled.section`
  background: #fbfbfb;
  margin-left: 0.5vw;
`;

const ContainerEvent = styled.section`
  margin-left: 1.5vw;
  width: 95%;
  // background: pink;
`;

const AddCelebration = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ContainerCelebration = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  img {
    width: 1.6vw;
    height: 3.7vh;
  }
  h3 {
    font-size: 1.2vw;
    font-weight: 400;
  }
`;

const Titles = styled.section`
  h3 {
    font-family: "roboto";
    font-weight: 400;
  }
`;

const AllContainerIcons = styled.div`
display: flex;
flex-direction: row;
gap: 2vw;
margin-top:1.4vh;
`

const ContainerIcons = styled.button`
box-sizing: border-box;
border-radius: 6px;
border: 1px solid #E0E0E0;
width: 5.07vw;
height: 10.7vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: none;
cursor: pointer;
&:hover  {
  color: #FF6200;
}

img {
    height: 46%;
    display:flex;
    align-items: center;
    justify-content: center;
    left:1.2vw;
}
span{
font-size: 0.7vw;
}

${props => props.secondary && css `
border: 1px solid #FF6200;
background: rgba(255, 98, 0, 0.05);

`}
`;
const AllContainerIntereses = styled.section`
margin-top: 4vh;
`

const ContainerIntereses = styled.section`
background: #FBFBFB;
width: 95%;

padding-top: 1vh;
`

const Button = styled.button`
text-align: center;
font-family: 'Lato';
font-style: normal;
font-weight: normal;
font-size: 11px;
color: #333333;
text-align: center;
padding: 1%;
height: 10%;
flex: none;
order: 0;
flex-grow: 0;
margin-right: 1vw;
margin-top: 1vh;
background: none;
cursor: pointer;
border: 0.86px solid #E0E0E0;
box-sizing: border-box;
border-radius: 4.28px;

&:hover  {
  color: #FF6200;
}

${props => props.secondary && css `
border: 1px solid #FF6200;
background: rgba(255, 98, 0, 0.05);
`}
`;


