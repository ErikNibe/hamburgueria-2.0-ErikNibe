import styled from "styled-components";

export const InputContainer = styled.div`
    position: relative;

    & > input {
        width: 100%;
        height: 60px;

        padding: 31px 25px;

        border: 2px solid var(--gray0);
        border-radius: 8px;
        outline: none;

        background-color: var(--gray0);

        font-weight: 400;
        font-size: 16px;
        color: var(--gray600);
    }

    & > input:focus {
        background-color: var(--white);

        border: 2px solid var(--gray600);
    }

    & > label {
        position: absolute;
        left: 0;

        padding: 24px 25px;

        pointer-events: none;

        font-weight: 400;
        font-size: 16px;
        color: var(--gray200);

        transition: 0.5s;
    }

    & input:valid ~ label, input:focus ~ label{
        transform: translateX(10px) translateY(-7px);

        padding: 0 10px;
        background-color: var(--white);

        font-size: 12px;
    }

    & input:valid {
        background-color: var(--white);

        border: 2px solid var(--gray600);
    }
`