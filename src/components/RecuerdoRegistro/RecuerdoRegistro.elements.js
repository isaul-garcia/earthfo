import styled from 'styled-components';


export const FooterContainer = styled.div`
padding:2rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterSubscription = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 24px;
padding: 24px;
color: #444444;
`;

export const FooterSubHeading = styled.p`
font-family: 'Inter', Arial, Helvetica, sans-serif;
margin-bottom: 24px;
font-size: 24px;
`;

export const FooterSubText = styled.p`
margin-bottom:24px;
font-size:20px;
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
}
`;

export const FormInput = styled.input`
padding: 12px 20px;
border-radius: 2px;
margin-right: 10px;
outline: none;
border: none;
font-size: 16px;
border-radius: 0px;
border: 1px solid #000;
background-color: #c9c9c9;

&::placeholder {
    color: #242424
}

@media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
}
`;