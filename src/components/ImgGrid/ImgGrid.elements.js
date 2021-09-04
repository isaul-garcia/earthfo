import styled from 'styled-components';

export const GridContainer= styled.section`
width: 100%;
height: 650px;
border-bottom: 1px solid #000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 1500px) {
        height: 535px;
    }

    @media screen and (max-width: 991px) {
        height: 625px;
    }
`;

export const GridWrapper= styled.section`
width: 1500px;
height: 100%;
border-left: 1px solid #000;
border-right: 1px solid #000;

@media screen and (max-width: 1500px) {
        width: 100%;        
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
    }

    @media screen and (max-width: 991px) {
        width: 100%;
    }
`;

export const GridContents = styled.div`
width: 1500px;
max-height: 100%;
margin-left: -1px;
overflow: hidden;

@media screen and (max-width: 1500px) {
        width: 100.25%;        
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: -2px;
    }

    @media screen and (max-width: 991px) {
        width: 100%;      
        margin-top: 20px;
    }
`;

export const ImgFill = styled.img`
width:16.667%;
border-top: 1px solid #000;
border-bottom: 1px solid #000;
border-left: 1px solid #000;
margin-bottom: 30px;
margin-top: 38px;
padding: 15px;
cursor: pointer;

&:first-child{
border-left: 1px solid rgba(1,1,1,0);
}

&:hover{
    opacity: 0.9;
}

@media screen and (max-width: 1500px) {
        margin-bottom: 10px;
        margin-top: 10px;
        padding: 15px;
    }

    @media screen and (max-width: 991px) {
        width: 33.33%;
        margin-bottom: 0px;
        margin-top: 0px;
        padding: 5px;
    }
`;

export const GridInfo = styled.div`
width: 719px;
height: 542px;
margin: 15px;
margin-top: -592px;
background-color: #24db5c;
color: #fff;
border: 1px solid #000;
position: absolute;
margin-left: 15px;
`;

export const InfoWrapper = styled.div`
padding: 35px;
`;

export const Headline = styled.h1`
font-size: 35px;
margin-bottom: 50px;
`;

export const Subtitle = styled.p`
font-size: 18px;
margin-bottom: 10px;
`;

export const Details = styled.p`
font-size: 12px;
`;