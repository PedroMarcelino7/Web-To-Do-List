import styled from "styled-components";

import bg from '../../images/bg-mobile-light.jpg';

export const Background_container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-inline: 1.5rem;
    padding-block: 3.5rem;
    background-image: url(${bg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: var(--gray50);
`