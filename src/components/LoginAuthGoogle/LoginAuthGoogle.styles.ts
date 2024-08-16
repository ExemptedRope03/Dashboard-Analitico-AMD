import styled from "styled-components";

export const FormContainer = styled.div`
    text-align: center;
`

export const LabelText = styled.p`
    margin: 10px 0 0 0;
    color:${(props) => props.theme.text};
`;


export const InputName = styled.input`
    padding:5px;
    font-size:17px;
    border-radius: 5px;
    margin: 1vh 0 5vh 0;
    text-align: center;
`

interface ButtonProps {
    disabled?: boolean;
  }

export const ButtonLogged = styled.button<ButtonProps>`
    background-color: ${(props) => (props.disabled? "green":props.theme.accent)};
    padding: 10px;
    color: ${(props) => props.theme.accentText};
    border: 0;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);

    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

`