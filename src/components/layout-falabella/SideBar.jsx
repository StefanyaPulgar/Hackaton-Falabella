import React from "react";
import styled from "styled-components";
import datos from "../../icons/data.svg";
import compras from "../../icons/shopping.svg";
import direccion from "../../icons/direction.svg";
import pagos from "../../icons/payments.svg";
import pfavorita from "../../icons/favoriteperson.svg";
import cmr from "../../icons/cmr.svg";
import giftcard from "../../icons/gift cards.svg";
import contraseña from "../../icons/password.svg";
import cerrar from "../../icons/close.svg";
import flecha from "../../icons/arrow.svg";

const SideBar = ({setView}) => {
  return (

    <Div>
      <Section>
        <Button> <Img alt="" src={datos} />
          <Parrafo><strong>Mis datos personales</strong></Parrafo>
          <Img alt="" src={flecha} />
        </Button>
        <Button>
          <Img alt="" src={compras} />
          <Parrafo>Mis compras</Parrafo>
          <Img alt="" src={flecha} />
        </Button>
        <Button>
          <Img alt="" src={direccion} />
          <Parrafo>Mis direcciones</Parrafo>
          <Img alt="" src={flecha} />
        </Button>
        <Button>
          <Img alt="" src={pagos} />
          <Parrafo>Mis medios de pago</Parrafo>
          <Img alt="" src={flecha} />
        </Button>
        <Button onClick={() => {setView(1)}}>
          <Img alt="" src={pfavorita} />
          <Parrafo><strong>Mis personas Favoritas </strong></Parrafo>
          <Img alt="" src={flecha} />
        </Button>
        <Button>
          <Img alt="" src={cmr} />
          <Parrafo>Mi CMR</Parrafo>
          <Img alt="" src={flecha} />
        </Button>
        <Button>
          <Img alt="" src={giftcard} />
          <Parrafo>Mis Gift cards</Parrafo>
          <Img alt="" src={flecha} />
        </Button>
        <Button>
          <Img alt="" src={contraseña} />
          <Parrafo>Cambiar mi contraseña </Parrafo>
          <Img alt="" src={flecha} />
        </Button>
        <Button>
          <Img alt="" src={cerrar} />
          <Parrafo>Cerrar sesion</Parrafo>
          <Img alt="" src={flecha} />
        </Button>
      </Section>
    </Div>
  );
};
export default SideBar;

const Div = styled.div`
height: auto;
width: 22vw;
border-radius: 0.3vw;
position: absolute;
background: #ffffff;
box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.2);
border-radius: 4px;
margin-left:4.8vw ;
`
const Section = styled.section`
margin:1.6vw;
display:;
flex-direction:column ;
justify-content: flex-start ;
`

const Button = styled.button`
display:inline-flex;
width:100%;
justify-content:flex-start ;
align-items:center ;
background:none;
border: none;
padding:1vw;
border-bottom: 1px solid #F0F0F0;
font-family: "Lato";
font-style: normal;
font-weight: normal;
font-size: 1.2vw;
background: #ffffff;
cursor: pointer;
&:hover  {
  color: #FF6200;
}
`
const Img = styled.img`

position: relative;
display:flex ;
justify-content:flex-start ;
background: #FFFFFF;
`
const Parrafo = styled.p`

`
