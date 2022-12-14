import { AsideContainer } from "../../components/AsideContainer";
import { Input } from "../../components/Input";

import { Button } from "../../styles/Button";
import { ContainerIndex } from "../../styles/Container";
import { FormContainer } from "../../styles/FormContainer";
import { Link } from "./styles";


export const LoginPage = () => {

    return (
        <ContainerIndex>
            <FormContainer>
                <h2>Login</h2>

                <Input type="text" label="Nome" />

                <Input type="password" label="Senha" />

                <Button btnSize="big" btnColor="green">Logar</Button>

                <span className="span__login">Crie sua conta para saborear muitas delicias e matar sua fome!</span>

                <Link to={"/register"}>Cadastrar</Link>
            </FormContainer>

            <AsideContainer />
        </ContainerIndex>
    )
}