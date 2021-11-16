import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
background: #c9c9c9;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
border-bottom: 1px solid #000;
top: 0;
z-index: 999;
transition: all 0.2s ease-in-out;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
transition: all 0.2s ease-in-out;
height: 100px;

@media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
}
`;

export const NavLogo = styled(Link)`
color: #000;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
height: 100%;
padding-left: 30px;
border-left: 1px solid #000;

@media screen and (max-width: 991px) {
    padding-left: 0px;    
    border-left: 0px solid #000;
}
`;

export const NavLogoImg = styled.img`
width: 490px;
cursor: pointer;
text-decoration: none;

    @media screen and (max-width: 1500px) {
        width: 490px;
    }

    @media screen and (max-width: 991px) {
        width: 300px;
    }
`;

export const NavFoundation = styled.img`
width: 62px;
cursor: pointer;
margin-left: 23px;
text-decoration: none;
transition: all .3s ease-in-out;
opacity: ${({isScroll}) => (isScroll ? '0' : '1')};
  -webkit-animation-name: spin;
  -webkit-animation-duration: 3900ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 3900ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 3900ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  animation-name: spin;
  animation-duration: 3900ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;  

    @media screen and (max-width: 1500px) {
    }

    @media screen and (max-width: 991px) {
        display: ${({hide}) => (hide ? 'none' : '')};
    }
`;

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 6px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh; 
    position: absolute;
    top: 100px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.4s ease;
    background: #c9c9c9;
}
`;

export const NavItem = styled.li`
border-right: 1px solid #000;
transition: all 0.8s ease-in-out;
height: 100px;

&:first-child{
    border-left: 1px solid #000;
}

&:hover{
    border-bottom: 1px solid #000;
}

@media screen and (max-width: 960px) {
    width:100%;
    border: 1px solid rgba(0,0,0,0);
    border-bottom: 1px solid #0061e1;
    background-color: #b7cef1;

    &:first-child{
    border: 1px solid rgba(0,0,0,0);
    border-bottom: 1px solid #0061e1;
    }

    &:hover{
    background-color: #9dbdec;
    border-bottom: 1px solid #0061e1;
    margin-bottom: 0px;
    }
}
`;

export const NavLink = styled(Link)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 2rem;
height: 100%;

&:hover {
    color: rgba(0,0,0,0.75);
}

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2em;
    width: 100%;
    display: table;
    color: #0061e1;


    &:hover {
        color: #0061e1;
    }

}`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;