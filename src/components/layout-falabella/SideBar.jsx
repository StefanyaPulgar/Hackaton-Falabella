import React from "react";
import styled from "styled-components";
import datos from "../../iconsSide/data.svg";
import compras from "../../iconsSide/shopping.svg";
import direccion from "../../iconsSide/direction.svg";
import pagos from "../../iconsSide/payments.svg";
import pfavorita from "../../iconsSide/favoriteperson.svg";
import cmr from "../../iconsSide/cmr.svg";
import giftcard from "../../iconsSide/gift cards.svg";
import contraseña from "../../iconsSide/password.svg";
import cerrar from "../../iconsSide/close.svg";
import flecha from "../../iconsSide/arrow.svg";

const SideBar = () => {
  return(
  
  <Div>
    <Button> <Img alt="" src={datos} />
    <b>Mis datos personales</b>
    <Img alt="" src={flecha} />
    </Button>
    <Button>
    <Img alt="" src={compras} />
     Mis compras        
     <Img alt="" src={flecha} />
     </Button>
    <Button>
    <Img alt="" src={direccion} />
      Mis direcciones
    <Img alt="" src={flecha} />
    </Button>
    <Button>
    <Img alt="" src={pagos} />
    Mis medios de pago
    <Img alt="" src={flecha} /> 
    </Button>
    <Button>
    <Img alt="" src={pfavorita} />
    <b>Mis personas Favoritas </b>
    <Img alt="" src={flecha} />
   </Button>
    <Button>
    <Img alt="" src={cmr} />
    Mi CMR 
    <Img alt="" src={flecha} />
    </Button>
    <Button>
    <Img alt="" src={giftcard} />
    Mis Gift cards
    <Img alt="" src={flecha} />
    </Button>
    <Button>
    <Img alt="" src={contraseña} />
     Cambiar mi contraseña 
    <Img alt="" src={flecha} />
    </Button>
    <Button>
    <Img alt="" src={cerrar} />
     Cerrar sesion
     <Img alt="" src={flecha} />
    </Button>
   </Div>
   );
};
export default SideBar;
  
const Div = styled.div`
display:grid ;
grid-template-rows:auto;
height: 97.5vh;
width: 25vw;
border-radius: 0.3vw;
position: absolute;
background: #ffffff;
box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.2);
border-radius: 4px;
`

const Button = styled.button`
display:grid;
grid-template-columns:1fr 4fr 1fr ;
justify-content:center ;
align-items:center ;
background:none;
border:none;
border: 1px solid #F0F0F0;
font-family: "Lato";
font-style: normal;
font-weight: normal;
font-size: 1.2vw;
justify-content:space-around;
background: #ffffff;
`
const Img = styled.img`

position: relative;
left: 39.58%;
right: 39.58%;
background: #FFFFFF;
`
