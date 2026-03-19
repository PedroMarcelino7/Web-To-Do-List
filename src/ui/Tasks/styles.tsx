import styled from "styled-components";

type CheckBoxProps = {
    $checked: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    `

export const Box = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TaskTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const CheckBox = styled.div<CheckBoxProps>`
    display: flex;
    padding: 0.25rem;
    border-radius: 50%;
    border: 2px solid var(--gray600);
    cursor: pointer;
    background: ${({ $checked }) => ($checked ? 'var(--gradient)' : 'transparent')};
`

export const Title = styled.h1<CheckBoxProps>`
    font-size: 1rem;
    color: ${({ $checked }) => ($checked ? 'var(--gray600)' : 'var(--navy850)')};
    text-decoration: ${({ $checked }) => ($checked ? 'line-through' : '')};
    text-decoration-thickness: 1px;
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`

export const IconBox = styled.div`
    display: flex;
`
