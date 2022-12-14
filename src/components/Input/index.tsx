import { InputContainer } from "./styles"

interface iInputProps {
    type: string;
    label: string;
    required?: boolean;
    repeated?: boolean;
}

export const Input = ({ type, label, repeated }: iInputProps) => {

    return (
        <InputContainer>
            <input type={ type } id={ repeated ? type + "1" : type } required={true}/>
            <label>{label}</label>
        </InputContainer>
    )
}