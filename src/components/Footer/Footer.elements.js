import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.div`
background-color: #0061e1;
padding:2rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterLinksContainer = styled.div`
width: 100%;
max-width: 1500px;
display: flex;
justify-content: center;

@media screen and (max-width: 991px) {
    padding-top: 32px;
}
`;


export const FooterLinksWrapper = styled.div`
display:flex;
align-items: center;

@media screen and (max-width:991px) {
    flex-direction:column;
}
`;

export const FooterLinksItems = styled.div`
text-align: center;
flex-direction: column;
align-items: flex-start;
margin: 35px 20px 20px 20px;
width: 160px;
box-sizing: border-box;
color: #f0f0f0;

@media screen and (max-width: 991px) {
    margin: 35px 15px 15px 15px;
    padding: 0px;
    width: 100%;
}
`;

export const FooterLinkTitle = styled(Link)`
font-weight:600;
font-size: 30px;
line-height: 35px;
text-align: center;
display: inline;
color: #c9c9c9;
text-decoration: none;
margin-bottom: 0.5rem;

&:hover {
    color: white;
}

@media screen and (max-width: 991px) {
    line-height: 30px;
    margin-bottom: 0rem;
}
`;

export const FooterLink = styled(Link)`
color: #f0f0f0;
text-decoration: none;
margin-bottom: 0.5rem;

&:hover {
    color: blue;
}
`;

export const SocialMedia = styled.section`
max-width: 1500px;
padding-right: 50px;
padding-left: 50px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:100%;
max-width: 1500px;
margin: 40px auto 0 auto;

@media screen and (max-width: 991px) {
    flex-direction: column;
}
`;

export const WebsiteRights = styled.small`
color: #c9c9c9;
margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 120px;
`;

export const SocialIconLink = styled.a`
color: #c9c9c9;
font-size: 24px;

&:hover {
    color: white;
}
`;

export const BottomGradient = styled.div`
width: 100%;
bottom: 0;
z-index: 10;
position: sticky;
overflow-x: hidden;
overflow-y: hidden;
pointer-events: none;
transition: all .3s ease-in-out;
opacity: ${({isScroll}) => (isScroll ? '1' : '0')};
`;

export const ForEarth = styled.div`
position: absolute;
width: 160px;
height: 160px;
margin-bottom: -290px;
margin-top: 40px;
z-index: 12;
float: left;
margin-left: 11.75vw;
pointer-events: none;
transition: all .3s ease-in-out;
opacity: ${({isBottom}) => (isBottom ? '0' : '1')};

@media screen and (max-width: 1500px) {
    margin-top: -8px;
    margin-bottom: -250px;
    margin-left: 1vw;
}

@media screen and (max-width: 991px) {
    width: 170px;
    height: 170px;
    margin-top: 40px;
    margin-left: 5vw;
    pointer-events: none;
}
`;

export const Waves = styled.img`
width: 100%;
z-index: 10;
margin-bottom: -16px;
pointer-events: none;

@media screen and (max-width: 991px) {
    width: 2000px;
}
`;

export const FoundationText = styled.img`
width: 100px;
margin-top: -10px;
bottom: 15vh;
cursor: pointer;
text-decoration: none;
z-index: 15;
  -webkit-animation-name: spin;
  -webkit-animation-duration: 9000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 9000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 9000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  animation-name: spin;
  animation-duration: 9000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

    @media screen and (max-width: 1500px) {
    }

    @media screen and (max-width: 991px) {
    }
`;


export const FoundationEarth = styled.img`
width: 100px;
bottom: 15vh;
margin-top: -100px;
margin-bottom: 25px;
cursor: pointer;
z-index: 15;

    @media screen and (max-width: 1500px) {
    }

    @media screen and (max-width: 991px) {
    }
`;

