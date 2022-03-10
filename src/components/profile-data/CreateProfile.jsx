import React from 'react'
import styled from "styled-components"

const CreateProfile = ({setView}) => {
    return (
        <ContainerCreate>
            <Button onClick={()=>{setView(2)}}>
                Crear nuevo perfil
            </Button>
        </ContainerCreate>
    )
}

export default CreateProfile;

const ContainerCreate = styled.section`
width: 62.2vw;
height: 44vh;
background-color: #FFFFFF;
`
const Button = styled.button`
background: ##FF6200;
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

}

`
