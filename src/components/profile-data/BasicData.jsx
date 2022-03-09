import styled from "styled-components";
import accountIcon from "./icons/accountIcon.svg"
import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';

// import {Link} from "react-router-dom";

const BasicData = () => {

    return (
        <ContainerProfile>
            <H2>Mi persona Favorita</H2>
            <Back href="">Volver a personas favoritas</Back>
            <ContainerBasicData>
                <ContainerImgData>
                <img alt="" src={accountIcon}></img><H3>Datos básicos</H3>
                </ContainerImgData>
                <P>Su nombre es <Input type="text" placeholder="Escribe su nombre"></Input></P>
                <P>Es mi</P>
                <ContainerImgData>
                <Button>MAMÁ</Button>
                <Button>PAPÁ</Button>
                <Button>FAMILIAR</Button>
                <Button>PAREJA</Button>
                <Button>OTRO, ¿CUÁL?</Button>
                </ContainerImgData>
                <P>Género</P>
                <ContainerImgData>
                    <Button>MUJER</Button>
                    <Button>HOMBRE</Button>
                    <Button>NO BINARIO</Button>
                    <P>Su fecha de nacimiento es el: <DayPickerInput
                        formatDate={formatDate}
                        parseDate={parseDate}
                        placeholder={`${formatDate(new Date())}`} /></P>
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
box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.2);
width: 939px;
height: 391px;
/* left: 421px;
top: 265px; */
padding:2%;
`
const ContainerBasicData = styled.div`
background: #FBFBFB;
width: 881px;
height: 252px;
left: 448px;
top: 382px;
padding: 2%;
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
width: 97px;
height: 16px;
right: 849px;
top: 399px;
`
const Input = styled.input`
border: none;
outline: none;
border-bottom: 0.5px solid #BBBBBB;
background: transparent;
font-size: 2.46vh;
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
`
// const DayPickerInput = styled.p`
// border:none;
// `