import styled , { css }  from "styled-components";
// import styled from "styled-components";
import accountIcon from "./icons/accountIcon.svg"
import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';



// import {Link} from "react-router-dom";

const BasicData = ({setProfileData, profileData}) => {
    
    

 

    return (
        <ContainerProfile>
            <H2>Mi persona Favorita</H2>
            <Back href="">Volver a personas favoritas</Back>
            <ContainerBasicData>
                <ContainerImgData>
                <img alt="" src={accountIcon}></img><H3>Datos básicos</H3>
                </ContainerImgData>
                <P>Su nombre es <Input 
                type="text" 
                name= "nombre"
                value={profileData.nombre}
                onChange={(e)=> setProfileData({...profileData , nombre:e.target.value})}
                placeholder="Escribe su nombre"></Input>
                
                </P>
                <P>Es mi</P>
                <ContainerImgData>
                <Button primary={profileData.parentesco === "MAMÁ"} onClick={()=> setProfileData({...profileData, parentesco: "MAMÁ"})}>MAMÁ </Button>
                <Button  primary={profileData.parentesco === "PAPÁ"} onClick={()=> setProfileData({...profileData, parentesco: "PAPÁ"})}>PAPÁ</Button>
                <Button  primary={profileData.parentesco === "FAMILIAR"} onClick={()=> setProfileData({...profileData, parentesco: "FAMILIAR"})}>FAMILIAR</Button>
                <Button  primary={profileData.parentesco === "PAREJA"} onClick={()=> setProfileData({...profileData, parentesco: "PAREJA"})}>PAREJA</Button>
                <Button  primary={profileData.parentesco === "OTRO"} onClick={()=> setProfileData({...profileData, parentesco: "OTRO"})}>OTRO, ¿CUÁL?</Button>
                </ContainerImgData>
                <P>Género</P>
                <ContainerImgData>
                <Button primary={profileData.genero ==="MUJER"}  onClick={()=> setProfileData({...profileData, genero : "MUJER"})}>MUJER</Button>
                    <Button primary={profileData.genero === "HOMBRE"}  onClick={()=> setProfileData({...profileData, genero : "HOMBRE"})}>HOMBRE</Button>
                    <Button primary={profileData.genero === "NO BINARIO"}  onClick={()=> setProfileData({...profileData, genero : "NO BINARIO"})}>NO BINARIO</Button>
                    <P>Su fecha de nacimiento es el: <DayPickerInput
                        value={profileData.fecha}
                        onDayChange={(day)=> setProfileData({...profileData , fecha: day})}
                        formatDate={formatDate}
                        parseDate={parseDate}
                        placeholder={`${formatDate(new Date())}`} />
</P>
                </ContainerImgData>
            </ContainerBasicData>
        </ContainerProfile>
    );
}

export default BasicData;

const P = styled.p`
font-family: 'Lato', sans-serif;
font-weight: normal;
font-size: 16px;
color: #333333;
`;

const H2 = styled.h2`
font-family: 'Lato', sans-serif;
font-weight: normal;
font-size: 24px;
color: #333333;
left: 448px;
top: 289px;

font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 29px;
`;

const Back = styled.a`
font-family: 'Lato', sans-serif;
font-size: 14px;
color: #68717D;
`
const ContainerProfile = styled.div`
background: #FFFFFF;
// background:blue;
box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.2);
// height: 44vh;
width:65vw;
height: 75%;
padding:2%;
// margin: 0.5%;
`
const ContainerBasicData = styled.div`
background: #FBFBFB;
// background: pink;
width: 95%;
// height: 30vh;
padding: 2%;
margin-top:1vh;
`
const ContainerImgData = styled.div`
display: flex;
`

const H3 = styled.h3`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
color: #333333;
// width: 97px;
// height: 16px;
width: 100%;

`
const Input = styled.input`
border: none;
outline: none;
border-bottom: 0.5px solid #BBBBBB;
background: transparent;
font-size: 2.46vh;
::-webkit-input-placeholder {
    font-size: 1.5vw;
}
`
const Button = styled.button`
text-align: center;
font-family: Lato;
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
margin: 0px 10px;
background: none;
cursor: pointer;
border: 0.86px solid #E0E0E0;
box-sizing: border-box;
border-radius: 4.28px;

${props => props.primary && css`
border: 1px solid #FF6200;
background: rgba(255, 98, 0, 0.05);
`}
`;
