import styled from "styled-components";

export const Input = styled.input`
    border: 1px solid ${props => props.theme.color};
    min-height:35px;
    height:35px;
    font-size:17px;
    width:auto;
    display:initial;
`

export const Label = styled.label`
    color:${props => props.theme.color};
    width:auto;
`


/**
 * TextField la combination between cac styled components khac
 * TextField co the lay gia tri tu reactProps de render cac thong tin
 *  */ 
export const TextField = ({label,...props})=>{
    return <span>
        <Label>
            {label}
        </Label>
        
        <Input {...props}></Input>
    </span>
}