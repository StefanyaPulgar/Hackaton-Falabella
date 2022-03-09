import React from 'react'
import {Event} from '..//events-data/Events'
import SideBar from '../layout-falabella/SideBar';
import BasicData from '../profile-data/BasicData';
import Header from '../layout-falabella/Header';
import styled from "styled-components";
import Head from './Head';

const Layout = () => {
return (
    <>
        <section>
                  <Header/>
                  <Head/>
        </section>
        <ContainerComponents>
            <ContainerSidebar>
              <SideBar/>  
            </ContainerSidebar>
            <ContainerEvent>
                <ContainerBasicdata>
         <BasicData/>

                </ContainerBasicdata>
                <ContainerNewEvent>
        <Event/>

                </ContainerNewEvent>
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

const ContainerBasicdata = styled.section`
`

const ContainerNewEvent = styled.section`
`
