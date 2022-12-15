import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatório").email("O email digitado é inválido"),
    password: yup.string().required("A senha é obrigatória").min(6, "A senha precisa conter pelo menos 6 caracteres"),
    confirmPassword: yup.string().required("É necessário confirmar a senha").oneOf([yup.ref("password")], "As senhas precisam ser iguais")
});