import React from 'react'
import styled from 'styled-components'
import person from '../../icons/person.svg'

const Head = () =>{
    return (
        <ContainerHead>
            <Div>
                <div>
                                <img src={person} alt=""/>
                </div>
                <div>
                    <p>BIENVENID@</p>
                    <p>Nicolas Hernandez</p>
                </div>
            </Div>
        </ContainerHead>
    )
} 

export default Head;

const ContainerHead = styled.section`
width: 97.7vw;
height: 15.4vh;
border: 1px solid black;
`

const Div = styled.div`
margin:1.5% ;
display: grid ;
grid-template-columns: 1fr 6fr ;
font-family: "lato";
font-weight: 700 ;
font-style: bold ;
`