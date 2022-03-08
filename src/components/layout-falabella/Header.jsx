import styled from "styled-components";
import logo1 from "./assets/logo1.svg";
import lupe from "./assets/lupe.svg";
import cart from "./assets/cart.svg";


const Header = () => {
    return (
        <ContainerHeader>
            <ContainerLogo>
                <Img src={logo1} alt="" />
            </ContainerLogo>
            <ContainerMenu>
                <SpanDiv>
                    <Span></Span>
                    <Span></Span>
                    <Span></Span>

                </SpanDiv>
                <SpanMenu>Menú</SpanMenu>
            </ContainerMenu>

            <Search>
                <DropdownSearch>Todas
                </DropdownSearch>
                <SearchInput type="text" placeholder="¿Qué buscas?"></SearchInput>
                <Button><img src={lupe} alt=""/></Button>
            </Search>

            <ContainerOptions>
            <ContainerA>
                <UserA href=""><span>Hola</span>
                    <span>Inicia Sesión</span> </UserA>
            </ContainerA>
            <ContainerA>
                <UserA href=""><span>Mis</span>
                    <span>compras</span>
                </UserA>
            </ContainerA>
            <dontainerAv>
                <a href="/"><img src={cart} alt="" /></a>
            </dontainerAv>
            </ContainerOptions>

        </ContainerHeader>
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
width: 192.77vw;
height:9.60vh;
align-items: center;
`
const Img = styled.img`
cursor: pointer;
margin-left: 10%;
width:80%;
`
const Span = styled.span`
display: block;
width: 2vw;
height: 0.45vh;
background: white;
margin: 0.70vw;
`
const SpanDiv = styled.div`
// width: 3vw;
// height: 6.42vh;
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
`
const Search = styled.div`
display:flex;
margin: 0% 1% 0% 1%;
height:100%;
align-items:center;
`
const SearchInput = styled.input`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 1rem;
width: 38vw;
height: 6vh;
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
`
const UserA = styled.div`
display: flex;
flex-direction: column;
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 1.1rem;
color:#FFFFFF;
cursor: pointer;
`
const ContainerA = styled.div`
// width: 4.875vw
width: 11%;
// height: 4.95vh;
height: 100%;
`

const ContainerOptions = styled.div`
display:flex;
width:40%;
`

