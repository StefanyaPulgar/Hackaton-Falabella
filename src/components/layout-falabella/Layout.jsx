import React from 'react'
import SideBar from '../layout-falabella/SideBar';
import Header from '../layout-falabella/Header';
import styled from "styled-components";
import Head from './Head';
import Main from '../profile-data/Main';
import { useState } from "react";

const Layout = () => {

    const [view, setView] = useState(0);


    return (

        <>
                <Header />
                <Head />
            <ContainerComponents>
                <ContainerSidebar>
                    <SideBar setView={setView}/>
                </ContainerSidebar>
                <ContainerEvent>
                    <Main view={view} setView={setView}/>
                </ContainerEvent>
            </ContainerComponents>

        </>


    )
}

export default Layout;

const ContainerComponents = styled.section`
display:grid ;
grid-template-columns: 0.74fr 2fr ;
margin: 0 ;
`

const ContainerSidebar = styled.section`
`

const ContainerEvent = styled.section`
grid-template-rows: 1.5fr 1fr ;

`