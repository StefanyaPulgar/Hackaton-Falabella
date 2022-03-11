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
width: 66.2vw;
height: 60vh;
align-items:center;
background-color: #FFFFFF;
box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.2);
margin-left: 14vw;
display: flex;
justify-content: center;
`
const Button = styled.button`
background: #FF6200;
padding: 8px 24px 9px;
border:none;
outline: none;
width: 14vw;
color: #FFFFFF;
cursor: pointer;
background: #FF6200;
border-radius: 24px;
margin:2%;

font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 1rem;
`
