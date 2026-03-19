import styled from "styled-components";

export const Container = styled.div`

`

export const Input_container = styled.input`
    display: flex;
    width: 100%;
    padding-inline: 2rem;
    padding-block: 1rem;
    font-size: 1rem;
    background-color: var(--white);
    border: none;
    border-radius: 7px;

    &::placeholder {
        color: var(--gray600);
    }
`