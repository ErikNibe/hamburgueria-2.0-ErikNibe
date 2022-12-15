import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { AsideContainer } from "../../components/AsideContainer";
import { Input } from "../../components/Input";
import { UserContext } from "../../contexts/UserContext";

import { Button } from "../../styles/Button";
import { ContainerIndex } from "../../styles/Container";
import { FormContainer } from "../../styles/FormContainer";
import { ErrorMessage } from "../RegisterPage/styles";
import { loginSchema } from "./loginSchema";

import { Link } from "./styles";

import { iLoginFormData } from "./types";

export const LoginPage = () => {
    const { loginUser, sending } = useContext(UserContext);

    const { register, handleSubmit, formState: {errors} } = useForm<iLoginFormData>({
        resolver: yupResolver(loginSchema)
    });

    const submit: SubmitHandler<iLoginFormData> = async (data) => {

        await loginUser(data);
    }

    return (
        <ContainerIndex registerPage={false}>
            <FormContainer onSubmit={handleSubmit(submit)}>
                <h2>Login</h2>

                <Input type="email" label="Email" register={register("email")} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                <Input type="password" label="Senha" register={register("password")} />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

                <Button btnSize="big" btnColor="green">{sending ? "Entrando..." : "Logar"}</Button>

                <span className="span__login">Crie sua conta para saborear muitas delicias e matar sua fome!</span>

                <Link to={"/register"}>Cadastrar</Link>
            </FormContainer>

            <AsideContainer />
        </ContainerIndex>
    )
}