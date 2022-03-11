import styled , { css }  from "styled-components";
import React from "react";
import cumpleaños from "../../icons/present.svg";
import aniversario from "../../icons/celebration.svg";
import navidad from "../../icons/tree.svg";
import vacaciones from "../../icons/vacation.svg";
import fpatria from "../../icons/flag.svg";
import fechaEspecial from "../../icons/specialdate.svg";
import calendario from "../../icons/calendar.svg";

export const ShowEvents = ({ eventData, setEventData, addData}) => {
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
              <ContainerIcons onClick={() => setEventData({ ...eventData, evento: "Cumpleaños" })}>
                <img src={cumpleaños} alt="Cumpleaños" />
                <span>Cumpleaños</span>
              </ContainerIcons>
              <ContainerIcons onClick={() => setEventData({ ...eventData, evento: "Aniversario" })}>
                <img src={aniversario} alt="Aniversario" />
                <span>Aniversario</span>
              </ContainerIcons>
              <ContainerIcons onClick={() => setEventData({ ...eventData, evento: "Navidad" })}>
                <img src={navidad} alt="Navidad" />
                <span>Navidad</span>
              </ContainerIcons>
              <ContainerIcons onClick={() => setEventData({ ...eventData, evento: "Vacaciones" })}>
                <img src={vacaciones} alt="Vacaciones" />
                <span>Vacaciones</span>
              </ContainerIcons>
              <ContainerIcons onClick={() => setEventData({ ...eventData, evento: "Fiestas patrias" })}>
                <img src={fpatria} alt="Fiestas patrias" />
                <span>18 de Sept.</span>
              </ContainerIcons>
              <ContainerIcons onClick={() => setEventData({ ...eventData, evento: "Fecha especial " })}>
                <img src={fechaEspecial} alt="Fecha especial" />
                <span>Fecha especial</span>
              </ContainerIcons>

            </AllContainerIcons>

          </section>


          <AllContainerIntereses>
            <Titles> Mis intereses son:</Titles>
            <ContainerIntereses>
              <Button onClick={() => setEventData({ ...eventData, intereses: "ROPA" })}>ROPA</Button>
              <Button onClick={() => setEventData({ ...eventData, intereses: "PERFUMES" })}>PERFUMES</Button>
              <Button onClick={() => setEventData({ ...eventData, intereses: "ZAPATILLAS" })}>ZAPATILLAS</Button>
              <Button onClick={() => setEventData({ ...eventData, intereses: "JUGUETES" })}>JUGUETES</Button>
              <Button onClick={() => setEventData({ ...eventData, intereses: "TECNOLOGIA" })}>TECNOLOGIA</Button>
              <Button onClick={() => setEventData({ ...eventData, intereses: "LIVING" })}>LIVING</Button>
              <Button onClick={() => setEventData({ ...eventData, intereses: "ACCESORIOS" })}>ACCESORIOS</Button>
              <Button onClick={() => setEventData({ ...eventData, intereses: "ARTICULOS DE BELLEZA" })}>ARTICULOS DE BELLEZA</Button>
              <Button onClick={() => setEventData({ ...eventData, intereses: "DECOHOGAR" })}>DECOHOGAR</Button>
              <Button onClick={() => setEventData({ ...eventData, intereses: "OTRA ¿CUAL?" })} >OTRA ¿CUAL?</Button>
            </ContainerIntereses>
          </AllContainerIntereses>

          <AllContainerIntereses>
            <Titles>Quiero recibir sugerencias de regalo</Titles>
            <ContainerIntereses>
              <Button onClick={() => setEventData({ ...eventData, notificacion: "15 días antes" })}>15 días antes</Button>
              <Button onClick={() => setEventData({ ...eventData, notificacion: "20 días antes" })}>20 días antes</Button>
              <Button onClick={() => setEventData({ ...eventData, notificacion: "1 mes antes" })}>1 mes antes</Button>
            </ContainerIntereses>
          </AllContainerIntereses>
        </ContainerEvent>
        <ItemButton>
          <h3>Cancelar</h3>
          <ButtonEvent onClick={addData} >Agregar evento</ButtonEvent>
        </ItemButton>
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
img {
    height: 46%;
    display:flex;
    align-items: center;
    justify-content: center;
    left:1.2vw;
}
span{
    // position: absolute;
font-size: 0.7vw;
// bottom: 18.4vh;
}

${props => props.secondary && css `
border: 1px solid #FF6200;
background: rgba(255, 98, 0, 0.05);
`}
`
const AllContainerIntereses = styled.section`
margin-top: 4vh;
`

const ContainerIntereses = styled.section`
background: #FBFBFB;
// width: 44.9vw;
// background: green;
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
`

const ItemButton = styled.section`
display: flex;
justify-content: flex-end;
align-items: center;
gap:3vw;
margin-right: 2vw;
h3{
    font-size: 1vw;
    font-weight: 400;
    text-decoration-line: underline;
}
`

const ButtonEvent = styled.button`
background: #BBBBBB;
border-radius: 1.8vw;
color: #FFFFFF;
border: none;
width: 16.4vw;
height: 6vh;
font-size: 1.4vw;

&:hover  {
  background: #FF6200;
  // display: none;
}
`;

