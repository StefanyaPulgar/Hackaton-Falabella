import React from 'react'
import styled from 'styled-components'
import person from '../../icons/person.svg'

const Head = () =>{
    return (
        <ContainerHead>
            <Div>
                <DivImg>
                                <img src={person} alt=""/>
                </DivImg>
                <DivInfo>
                    <Divp>B I E N V E N I D @ </Divp>
                    <Divp2>Nicolas Hernandez</Divp2>
                </DivInfo>
            </Div>
        </ContainerHead>
    )
} 

export default Head;

const ContainerHead = styled.section`
display: flex ;
justify-content:center ;
`

const Div = styled.div`
margin:1.5% ;
display: flex ;
width: 89vw;
height: 12.4vh;
box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.2);
font-family: "lato";
font-weight: 700 ;
font-style: bold ;

`

const DivImg = styled.div`
margin-left: 3vw;
margin-top: 3vh;
margin: 3vh 1vw 0 3vw;
img {
    width: 90%;
}
`

const DivInfo = styled.div`
line-height: normal ;
margin-top:4.2vh ;

`
const Divp = styled.p`
font-size:1vw ;
margin:0%;
`

const Divp2 = styled.p`
margin:0%;
    font-size: 1.8vw ;
`