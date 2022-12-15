export interface iRegisterFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    children: JSX.Element|JSX.Element[];    
}
       