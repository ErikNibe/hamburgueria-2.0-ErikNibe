import { AsideContainer } from "../../components/AsideContainer"
import { Input } from "../../components/Input"
import { Button } from "../../styles/Button"
import { ContainerIndex } from "../../styles/Container"
import { FormContainer } from "../../styles/FormContainer"
import { HeaderRegister, Link } from "./styles"

export const RegisterPage = () => {
    return (
        <ContainerIndex>
            <AsideContainer />

            <FormContainer>
                <HeaderRegister>
                    <h2>Cadastro</h2>

                    <Link to={"/"}>Retornar para o login</Link>
                </HeaderRegister>

                <Input type="text" label="Nome" />

                <Input type="email" label="Email" />

                <Input type="password" label="Senha" />

                <Input type="password" label="Confirmar senha" repeated={true}/>

                <Button btnSize="big" btnColor="gray" type="submit">Cadastrar</Button>
            </FormContainer>
        </ContainerIndex>
    )
}