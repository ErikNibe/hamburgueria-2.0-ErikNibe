import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AsideContainer } from "../../components/AsideContainer";
import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { ContainerIndex } from "../../styles/Container";
import { FormContainer } from "../../styles/FormContainer";
import { ErrorMessage, HeaderRegister, Link } from "./styles";
import { iRegisterFormData } from "./types";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export const RegisterPage = () => {
    const { registerUser } = useContext(UserContext);
    
    const { register, handleSubmit, formState: {errors} } = useForm<iRegisterFormData>({
        mode: "onChange",
        resolver: yupResolver(registerSchema)
    });

    const submit: SubmitHandler<iRegisterFormData> = async (data) => {
        delete data.confirmPassword;

        await registerUser(data);
    }

    return (
        <ContainerIndex registerPage={true}>
            <AsideContainer />

            <FormContainer onSubmit={handleSubmit(submit)}>
                <HeaderRegister>
                    <h2>Cadastro</h2>

                    <Link to={"/"}>Retornar para o login</Link>
                </HeaderRegister>

                <Input type="text" label="Nome" register={register("name")} errors={errors.name}/>
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                <Input type="email" label="Email" register={register("email")} errors={errors.email}/>
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                <Input type="password" label="Senha" register={register("password")} errors={errors.password}/>
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

                <Input type="password" label="Confirmar senha" repeated={true} register={register("confirmPassword")} errors={errors.confirmPassword}/>
                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

                <Button btnSize="big" btnColor="gray" type="submit">Cadastrar</Button>
            </FormContainer>
        </ContainerIndex>
    )
}