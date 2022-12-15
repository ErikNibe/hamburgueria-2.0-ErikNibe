import { UseFormRegisterReturn } from "react-hook-form";
import { FieldError } from "react-hook-form/dist/types";
import { InputContainer } from "./styles"

interface iInputProps {
    type: string;
    label: string;
    required?: boolean;
    repeated?: boolean;
    register: UseFormRegisterReturn;
    errors?: FieldError;
}

export const Input = ({ type, label, repeated, register, errors }: iInputProps) => {

    return (
        <InputContainer errors={errors}>
            <input type={ type } id={ repeated ? type + "1" : type } {...register} required/>
            <label>{label}</label>
        </InputContainer>
    )
}
