import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.theme.backgroundColor};
    font-size: 20px;
     &:hover{
         color: ${props => props.theme.backgroundColor};
         background-color: ${props => props.theme.color};
     }
`

export const DivStyled = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
`