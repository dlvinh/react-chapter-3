import styled from "styled-components";

export const ModalContainer = styled.div`
background-color: ${props => props.theme.bgColor};
color: ${props => props.theme.color};
border: 5px solid ${props => props.theme.color};
padding: 15px 50px;
margin-right: auto;
margin-left: auto;
`