import React, {useState} from 'react';
import {
GridContainer,
GridContents,
ImgFill,
GridWrapper,
GridInfo,
InfoWrapper,
Headline,
Subtitle,
Details,
} from './ImgGrid.elements';
import gridImages from './gridImages'

function ImgCubicle({headline, subtitle, details}) {    
    const [style, setStyle] = useState({display: 'none'});
    return (
      <>
        <GridContents>
        { gridImages.map(({id, src, title, description}) => <ImgFill key={id} src={src} title={title} alt={description} />) }
        </GridContents>
        <GridContents>
        { gridImages.map(({id, src, title, description}) => <ImgFill key={id} src={src} title={title} alt={description} />) }
        </GridContents>
        <GridInfo style={style}>
            <InfoWrapper>
                <Headline>{headline}</Headline>
                <Subtitle>{subtitle}</Subtitle>
                <Details>{details}</Details>
            </InfoWrapper>
        </GridInfo>
      </>
    )
  }

const ImgGrid = () => {
    return (
        <>
            <GridContainer>
                <GridWrapper>
                    <ImgCubicle />
                </GridWrapper>
            </GridContainer>
        </>
    )
}

export default ImgGrid
