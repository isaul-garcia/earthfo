import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    
}

body {
    background: #c9c9c9;
    overflow-x: hidden;
}

body::-webkit-scrollbar {
  display: none;
}

h1 {
    font-family: 'Inter';
    font-size: 80px;
    font-weight: 700; 
    line-height: 42px;

    @media screen and (max-width: 1500px) {
        line-height: 42px;
    }

    @media screen and (max-width: 991px) {
        line-height: 65px;
        font-size: 60px;
    }
}


@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
height: 100%;
max-width: 1500px;
margin-right: auto;
margin-left: auto;
margin-top: ${({topspacing}) => (topspacing ? '97px' : '0px')};

@media screen and (max-width: 991px) {
    padding-right: 0px;
    padding-left: 0px;
}

@media screen and (max-width: 1280px) {
    margin-top: 0px;
}
`;

export const Button = styled.button`
border-radius: 0px;
background: ${({primary}) => (primary ? '#c900e1' : '#d7a9dc')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: 1px solid #000;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-ease-in-out;
    background: #000;
    color: #000;
    background: ${({primary}) => (primary ? '#d7a9dc' : '#c900e1')};
}

@media screen and (max-width: 991px) {
    width:100%;
}
`;

export const LinkArrowButton = styled.button`
border-radius: 18px;
background: rgba(240,240,20,0);
white-space: nowrap;
color: #0061e1;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
transition: transform 0.2s;
margin-bottom: ${({shortDesc}) => (shortDesc ? '60px' : '0px')};
transition: all 0.2s ease-in-out;

&:hover {
    transform: translate(0px, -2px);
    color: #c900e1;
}


@media screen and (max-width: 991px) {
    width:100%;
    text-align: left;
    
}
`;

export default GlobalStyle;