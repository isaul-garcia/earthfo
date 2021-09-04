import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';

//Info Column

export const InfoSec = styled.div`
height: 100%;
color: #fff;
padding: 160px 0;
border-bottom: 1px solid #000;
z-index: 9;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({backColor}) => (backColor)}; 

@media screen and (max-width: 991px) {
padding: 80px 20px;
}
`;

export const AContainer = styled.div`
  ${Container}
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
z-index: 9;
`;


export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width:50%;
flex-basis:50%;
z-index: 9;

@media screen and (max-width: 768px) {
    max-width:100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 0px;
z-index: 9;
float: ${({imgStart}) => (imgStart ? 'right' : '')};

@media screen and (max-width: 768px) {
    padding-bottom: 65px;
}
`;

export const TopLine = styled.div`
color: ${({lightTopLine}) => (lightTopLine ? '#0061e1' : '#444444')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
text-align: justify;
text-justify: inter-word; 
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
font-weight: 900;
line-height: 1.1;
color: ${({accentColor}) => (accentColor)}; 
text-align: justify;
text-justify: inter-word;
text-transform: uppercase;

@media screen and (max-width: 991px) {
        line-height: 40px;
        font-size: 35px;
    }
`;

export const Subtitle = styled.p`
font-size: 18px;
line-height: 24px;
color: ${({accentColor}) => (accentColor)}; 
`;

//Featured Image Column

export const FeaturedCard = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0px 0px rgba(30,158,97, 0);
  width: 100%;
  height: 400px;
  text-decoration: none;
  position: relative;
  cursor: pointer;
`;

export const FeaturedVisual = styled.div`
max-width: 100%;
max-height: 316px;
object-fit: cover;
display: flex;
padding: 4px;

@media screen and (max-width: 1280px) {
  max-height: 316px;
}
`;

export const Visual = styled.img`
padding-right: 0;
border: 0;
width: 100%;
height: 100%;
display: inline-block;
object-fit: ${({containMe}) => (containMe ? 'contain' : 'cover')};
`;

export const ImgInfo = styled.div`
max-width: 200px;
height: 34px;
margin: 15px;
z-index: 30;
position: absolute;
bottom:0;
right: 0;
background-color: rgba(0,0,0,0.5);
color: #c9c9c9;
padding: 8px 14px;
font-size: 12px;
cursor: pointer;
`;
