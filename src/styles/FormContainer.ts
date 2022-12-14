import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 19px;
    
    width: 500px;
    padding: 21px 24px;

    border: 2px solid var(--gray0);
    border-radius: 5px;

    h2 {
        font-weight: 700;
        font-size: 18px;
        color: var(--gray600);
    }

    .span__login {
        width: 327px;
        text-align: center;

        margin: 0 auto;

        font-weight: 400;
        font-size: 14px;
        color: var(--gray200);
    }

    @media (max-width: 570px) {
        max-width: 100%;

        .span__login {
            max-width: 100%
        }
    }
`