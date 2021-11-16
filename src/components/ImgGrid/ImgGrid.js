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
import Image1 from '../../assets/logo2.png'
import Image2 from '../../assets/logo3.png'
import Image3 from '../../assets/logo4.png'
import Image4 from '../../assets/logo5.png'
import Image5 from '../../assets/logo7.png'
import Image6 from '../../assets/logo8.png'

function ImgCubicle({headline, subtitle, details}) {    
    const [style, setStyle] = useState({display: 'none'});
    return (
      <>
        <GridContents>
            <ImgFill key="1" src={Image1} title="AC" alt="logo" />
            <ImgFill key="2" src={Image2} title="Vobi" alt="logo" />
            <ImgFill key="3" src={Image3} title="I.N. Network Security" alt="logo" />
            <ImgFill key="4" src={Image4} title="Opsu" alt="logo" />
            <ImgFill key="5" src={Image5} title="ʞeppa" alt="logo" />
            <ImgFill key="6" src={Image6} title="RGB" alt="logo" />
        </GridContents>
        <GridContents>
            <ImgFill key="1" src={Image1} title="AC" alt="logo" />
            <ImgFill key="2" src={Image2} title="Vobi" alt="logo" />
            <ImgFill key="3" src={Image3} title="I.N. Network Security" alt="logo" />
            <ImgFill key="4" src={Image4} title="Opsu" alt="logo" />
            <ImgFill key="5" src={Image5} title="ʞeppa" alt="logo" />
            <ImgFill key="6" src={Image6} title="RGB" alt="logo" />
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
