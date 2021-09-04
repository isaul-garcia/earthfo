import styled from 'styled-components';

export const WelcomeSection = styled.section`
margin-top: -100px;
background-color: #000;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
padding: 24px;
color: #444444;
border-bottom: 1px solid #000;
`;

export const WelcomeSubHeading = styled.h1`
    margin-bottom: 34px;
    margin-top: 20px;
    font-size: 80px;
    text-transform: uppercase;
    color: #fff;
    z-index: 11;
    font-weight: 800;

    @media screen and (max-width: 1500px) {
        line-height: 42px;
    }

    @media screen and (max-width: 991px) {
        line-height: 55px;
        font-size: 60px;
    }
`;

export const WelcomeSubText = styled.p`
margin-bottom:24px;
font-size:20px;
color: #fff;
z-index: 11;
`;

export const DimmingBlack = styled.div`
background-color: rgba(0,0,0,0.3);
width: 1500px;
height: 100%;
border-left: 1px solid #000;
border-right: 1px solid #000;
z-index: 9;
position: absolute;

@media screen and (max-width: 991px) {
        width: 100%;
    }

    @media screen and (max-width: 1500px) {
        width: 100%;
    }
`;

export const ImgInfo = styled.div`
max-width: 200px;
height: 34px;
border-left: 1px solid #000;
border-top: 1px solid #000;
z-index: 30;
position: absolute;
bottom:0;
right: 0;
background-color: rgba(0,0,0,0.1);
color: #a7a7a7;
padding: 8px 10px;
font-size: 12px;
cursor: pointer;
`;

export const ArrowIcon = styled.a`
color: #fff;
font-size: 24px;
z-index: 12;
padding-top: 100px;
margin-bottom: -190px;
position: absolute;

&:hover {
    color: white;
}

@media screen and (max-width: 991px) {
padding-top: 50px;
}
`;
