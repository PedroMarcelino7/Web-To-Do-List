import styled from "styled-components";

import background_mobile_light from '../../images/bg-mobile-light.jpg';
// import background_mobile_dark from '../../images/bg-mobile-dark.jpg';
import background_desktop_light from '../../images/bg-desktop-light.jpg';
// import background_desktop_dark from '../../images/bg-desktop-dark.jpg';

export const ScreenBackground = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${background_mobile_light});
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;

    @media (min-width: 900px) {
        background-image: url(${background_desktop_light});
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-inline: 1.5rem;
    padding-block: 2.5rem;

    @media (min-width: 700px){
        gap: 1.75rem;
        padding-inline: 1.5rem;
        padding-block: 2.5rem;
        max-width: 650px;
    }
`