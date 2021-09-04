import React from 'react';
import { homeObjOne,homeObjTwo, homeObjThree, gridObject } from  './Data';
import {InfoSection, WelcomeSection, RecuerdoRegistro, ImgGrid, Events, Statistics} from '../../components';


const Home = () => {
    return (
        <>
            <WelcomeSection/>
            <InfoSection {...homeObjOne} />
            <Statistics />
            <InfoSection {...homeObjThree} />
            <ImgGrid {...gridObject}/>
            <InfoSection {...homeObjTwo} />
            <Events />
            <RecuerdoRegistro />
        </>
    )
}

export default Home