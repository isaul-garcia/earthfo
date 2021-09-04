import styled from 'styled-components';

export const EventContainer= styled.section`
width: 100%;
height: 650px;
border-bottom: 1px solid #000;
display: flex;
justify-content: center;
align-items: center;
`;

export const EventWrapper= styled.section`
width: 1500px;
height: 100%;
border-left: 1px solid #000;
border-right: 1px solid #000;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@media screen and (max-width: 1500px) {
        width: 100%;
    }

    @media screen and (max-width: 991px) {
        
border-left: 0px solid #c9c9c9;
border-right: 0px solid #c9c9c9;
    }
`;

export const EventContents = styled.div`
width:25%;
height: 651px;
overflow: hidden;
border-top: 1px solid #000;
border-bottom: 1px solid #000;
border-left: 1px solid #000;
position: relative;

&:first-child{
    border-left:0px solid #000;
}

@media screen and (max-width: 1500px) {
    }

    @media screen and (max-width: 991px) {
        width: 50%;
        flex: 50%;
        height: 525px;
        display: ${({hide}) => (hide ? 'none' : 'block')}; 
    }
`;

export const ImgFill = styled.img`
width: 100%;
height: 375px;
padding: 15px;
object-fit: cover;

&:first-child{
border-left: 1px solid rgba(1,1,1,0);
}
`;

export const Headline = styled.h1`
font-size: 35px;
margin-bottom: 10px;

@media screen and (max-width: 1500px) {
        line-height: 35px;
    }

    @media screen and (max-width: 991px) {
        line-height: 25px;
        font-size: 20px;
    }
`;

export const Subtitle = styled.p`
font-size: 18px;
margin-bottom: 10px;
height: 64px;
max-height: 64px;
overflow: hidden;
`;

export const Date = styled.p`
font-size: 18px;
margin-bottom: 10px;
height: 24px;
max-height: 24px;
overflow: hidden;
`;

export const EventDetails = styled.div`
padding: 0px 15px 15px 15px;
`;

export const EventsButton = styled.button`
height: 55px;
background:#24db5c;
padding: 10px 20px;
color: #fff;
font-size: 16px;
outline: none;
border: 1px solid #000;
cursor: pointer;
width: 100%;
bottom: 0;

&:hover {
    transition: all 0.3s ease-ease-in-out;
    background: #000;
    color: #000;
    background: #9bcdaa;
}

@media screen and (max-width: 960px) {
    width:100%;
}
`;
