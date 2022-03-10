import React from 'react'
import { Event } from '../events-data/Events';
import BasicData from '../profile-data/BasicData';

const changeComponent = (option) => {
    switch(option) {
        case "principal": 
        return <Event/>;
        case "evento":
        return <BasicData/>
    }
}

export default changeComponent;