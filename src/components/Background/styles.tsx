import styled from "styled-components";

import bg from '../../images/bg-mobile-light.jpg';

export const Background_container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-image: url(${bg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: var(--light);
`