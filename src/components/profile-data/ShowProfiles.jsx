import { db } from "../../firebase/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { doc, deleteDoc } from "firebase/firestore";




const ShowProfiles = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "dates"));
    onSnapshot(q, (snapshot) => {
      //console.log('se ejecuto snapshot')
      // console.log(snapshot.docs[0].data());
      const listData = snapshot.docs.map((documento) => {
        //aplico map a todos los elementos de la coleccion
        //por cada elemento de la base de dato quiero que me devuelva
        //y guardes en el arreglo un objeto, documento.data y un id 
        return { ...documento.data(), id: documento.id }

      })
      setData(listData);

    },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const deleteProfile = async (id) => {
    await deleteDoc(doc(db, 'dates', id));
  }

  console.log(data)
  // console.log(data.profile.nombre);
  return (

    <ContainerShowProfiles>
      <ContainerHs>
      <h2>Mis personas favoritas</h2>
      <h3>Revisa los eventos que tienen:</h3>
      </ContainerHs>

      <ContainerBtnMap>
        {data.map((documento, index) => (
          <DivDataProfile key={index} >
            <ContainerTitles>
              <Name>{documento.profile.nombre}</Name>
              <EventName>{documento.events.evento}</EventName>
            </ContainerTitles>
            <ContainerBtns>
              <DeleteBtn onClick={() => deleteProfile(documento.id)}>Eliminar</DeleteBtn>
              <EditBtn>Editar</EditBtn>
            </ContainerBtns>
          </DivDataProfile>
        ))}
      </ContainerBtnMap>
    </ContainerShowProfiles>
  )
}
export default ShowProfiles;

const ContainerShowProfiles = styled.div`
  h2, h3 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  color: #333333;
  }
  box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.2);
  background: #FFFFFF;
  width: 65vw;
  margin-left: 14vw;
  margin-top: vh;
`

const ContainerHs = styled.div`
padding-top: 1vh;
margin-left: 2vw;
h3 {
  font-weight: 1.25rem;
}
`

const ContainerBtnMap = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin: 2% 0% 2% 0%;
background:transparent;
`

const DivDataProfile = styled.div`
display:flex;
align-items: center;
padding:1%;
background: #FFFFFF;
border: 1px solid #E7E7E7;
box-sizing: border-box;
border-radius: 4px;
margin: 1%;
width: 80%;
height: 83px;
`
const Name = styled.p`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 14px;
color: #333333;
margin:0%;
`
const EventName = styled.p` 
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
color: #888888;
margin:0%;
`

const ContainerTitles = styled.div`
padding: 1.5%;
width: 54%;
`
const ContainerBtns = styled.div`
display:flex;
flex-direction: row;
`
const DeleteBtn = styled.button`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
text-decoration-line: underline;
color: #888888;
border: none;
outline: none;
Background:transparent;
cursor: pointer;
margin-right: 1%;
`
const EditBtn = styled.button`
background: #495867;
padding: 8px 24px 9px;
border-radius: 20px;
border:none;
outline: none;
width: 14vw;
color: #FFFFFF;
cursor: pointer;
`
