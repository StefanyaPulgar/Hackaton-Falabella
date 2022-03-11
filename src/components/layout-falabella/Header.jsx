import styled from "styled-components";
import logo1 from "./assets/logo1.svg";
import lupe from "./assets/lupe.svg";
import cart from "./assets/cart.svg";
import fill from "../../icons/fill.svg";
import arrow from "../../icons/arrowdown.svg";
import menu from "../../icons/menu.svg";
import arrowHeader from "../../icons/arrow-filter.svg";

const Header = () => {
    return (
        <>
        <ContainerHeader>
            <ContainerLogo>
                <Img src={logo1} alt="" />
            </ContainerLogo>
            <ContainerMenu>
                <SpanDiv>
                 <img src={menu} alt=""/>
                </SpanDiv>
                <SpanMenu>Menú</SpanMenu>
            </ContainerMenu>

            <Search>
                <I>
                <DropdownSearch>Todas
                </DropdownSearch>
                <SearchInput type="text" placeholder="¿Qué buscas?"></SearchInput>
                <Button><img src={lupe} alt=""/></Button>
                </I>
            </Search>

            <ContainerOptions>
            <ContainerA href="">
            <p>Hola<br/>Inicia sesion <img src={arrowHeader} alt=""/></p> 
  
            </ContainerA>
            <ContainerA>
            <P>Mis<br/>Compras</P> 
            </ContainerA>
            <ContainerA>
                <a href="/"><img src={cart} alt="" /></a>
            </ContainerA>
            </ContainerOptions>

        </ContainerHeader>
        <ContainerHeaderDown>
            <SubContainerLeft>
              <img src={fill} alt=""/>
            <p>Entrega en <strong>Providencia</strong></p>  
            </SubContainerLeft>
            <SubContainerRight>
                <p>Vende con nosotros</p>
                <p>Fpay</p>
                <p>Tarjeta CMR</p>
                <img src={arrow} alt=""/>
                <p>Ayuda</p>
                <img src={arrow} alt=""/>
            </SubContainerRight>
            
        </ContainerHeaderDown>
        </>
    );
}

export default Header;

const ContainerLogo = styled.div`
display:flex;
width: 243px;
height:100%;
border-radius: 0px 35px 35px 0px;
background-color:#FF9301;
`
const ContainerHeader = styled.div`
padding: 0%;
display:flex;
background: #FF6200;
width: 100vw;
height:8.3vh;
align-items: center;
`
const Img = styled.img`
cursor: pointer;
margin-left: 10%;
width:80%;
`

const SpanDiv = styled.div`
margin-left:1.2vw ;
margin-top:0.4vh ;
`
const SpanMenu = styled.a`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 1.3rem;
color: #FFFFFF;
cursor: pointer;

`
const ContainerMenu = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width:4%;
margin-right: 2vw;
`
const Search = styled.div`
display:flex;
margin: 0% 1% 0% 6%;
align-items:center;
width: 52vw;
`

const I = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
border-radius: 35px;
background: white;
width: 100%;
`;


const SearchInput = styled.input`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 1rem;
width: 100%;
height: 100%;
border-radius: 0px 35px 35px 0px;
border: none;
outline: none;
color: #767676;
padding-left: 2%;
`
const DropdownSearch = styled.div`
display:flex;
justify-content:center;
align-items: center;
width: 5.625vw;
height: 6.5vh;
background-color: #EDEDED;
color: #4A4A4A;
font-size: 1rem;
border-radius: 35px 0px 0px 35px;
`
const Button = styled.button`
border: none;
outline: none; 
border-radius: 35px;
width: 3.95vw;
background: #495867;
height: 6.5vh;

cursor: pointer;
&:hover  {
    color: #FF6200;
}
`

const ContainerA = styled.div`
// width: 4.875vw
// height: 4.95vh;
height: 100%;
display: flex;
flex-direction: column;
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 1.1rem;
color:#FFFFFF;
cursor: pointer;
a {
    margin-top: 1.3vh;
}
`

const P = styled.p`
border-left: 1px solid white;
border-right: 1px solid white;
margin-left: -1vw;
padding-left:2vw;
margin-right: 2vw;
`

const ContainerOptions = styled.div`
display:grid;
justify-content: space-around;
width: 40vw;
grid-template-columns: 1fr 1fr 0.5fr;
align-items: center;
`

const ContainerHeaderDown = styled.section`
width: 100%;
height: 6vh ;
background-color: #FFFFFF ;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
font-family: "Lato" ;
font-size: 1vw ;
display: flex ;
justify-content: space-between ;
`

const SubContainerLeft = styled.section`
display: flex;
margin-left: 2.2vw ;
margin-top:1vh;
img {
    width:1vw ;
    margin-right: 1vw ;
    margin-bottom:0.7vh ;
}
`

const SubContainerRight = styled.section`
display: flex;
margin-top:1vh;
margin-right:1vw;
p{
  margin-left:2vw; 
}
img {
    width:0.5vw ;
    margin-left:0.3vw ;
    margin-bottom:0.5vh ;
}
`