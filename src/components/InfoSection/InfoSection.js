import React from 'react';
import {
    InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper, 
    AContainer,
    Heading, 
    Subtitle, 
    FeaturedCard, 
    Visual, 
    ImgInfo } from './InfoSection.elements';
import { IconContext } from 'react-icons/lib';


const InfoSection = ({imgStart, backColor, accentColor, lightText, lightTextDesc, description, headline, start, topspacing, featuredLink, featuredImg, featuredTitle, containMe, promoted, }) => {
    return (
        <>
        <IconContext.Provider value={{ color: '#444', size: 35 }}>
            <InfoSec backColor={backColor}> 
                <AContainer topspacing={topspacing}>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper imgStart={imgStart}>
                                <Heading imgStart={imgStart} lightText={lightText} accentColor={accentColor}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc} accentColor={accentColor}>{description}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <IconContext.Provider value={{ color: '#fff', size: 20 }}>
                            <FeaturedCard to={featuredLink} start={start} promoted={promoted}>
                                    <Visual containMe={containMe} src={featuredImg} alt={featuredTitle} />
                                    <ImgInfo>𝓲</ImgInfo>
                            </FeaturedCard>
                        </IconContext.Provider>
                        </InfoColumn>
                    </InfoRow>
                </AContainer>
            </InfoSec>
        </IconContext.Provider>
        </>
    );
};

export default InfoSection;
