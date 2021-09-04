import styled from 'styled-components';

export const StatsContainer= styled.section`
width: 100%;
height: 650px;
border-bottom: 1px solid #000;
display: flex;
justify-content: center;
align-items: center;

    @media screen and (max-width: 991px) {
        height: 900px;
        border-bottom: 1px solid #c9c9c9;
    }
`;

export const StatsWrapper= styled.section`
    width: 1500px;
    height: 100%;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 991px) {
        flex-direction: column;
        height: 900px;
        width: 100%;        
        border-left: 1px solid #c9c9c9;    
        border-right: 1px solid #c9c9c9;
    }
`;

export const StatsContents = styled.div`
width:100%;
height: 651px;
overflow: hidden;
border-top: 1px solid #000;
border-bottom: 1px solid #000;
border-left: 1px solid #000;
position: relative;
padding: 60px;

&:first-child{
    border-left:0px solid #000;
}

@media screen and (max-width: 991px) {
    &:first-child{
    border-bottom:1px solid #c9c9c9;
    height: 470px;
    padding: 20px;
    margin-top: -50px;
    pointer-events: none;
    }
    padding: 20px;
    margin-top: -50px;
    border-top: 1px solid #c9c9c9;
    border-left: 1px solid #c9c9c9;
    }
`;

export const ImgFill = styled.img`
width: 100%;
max-height: 375px;
padding: 15px;

&:first-child{
border-left: 1px solid rgba(1,1,1,0);
}
`;

export const Headline = styled.h1`
font-size: 35px;
margin-bottom: 15px;
line-height: 32px;

@media screen and (max-width: 991px) {
    font-size: 30px;
    line-height: 30px;
    font-weight: 800;
    margin-bottom: 10px;
    width: 100%;
    }
`;

export const Subtitle = styled.p`
font-size: 18px;
margin-bottom: 10px;
width: 490px;
height: 200px;
overflow: hidden;

@media screen and (max-width: 991px) {
    width: 100%;
    }
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

@media screen and (max-width: 991px) {
    width:100%;
}
`;
