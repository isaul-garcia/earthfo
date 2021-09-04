import styled from 'styled-components';

export const SliderSection = styled.section`
    position: relative;
    height: 80vh;
`;

export const Slide = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: .3s ease;

    &:active{
        opacity: 1;
        transition-duration: .2s;
    }
`;

export const SliderImage = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;