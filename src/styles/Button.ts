import styled, { css } from "styled-components";

interface iButtonProps {
    btnSize: string;
    btnColor: string;
}

export const Button = styled.button<iButtonProps>`
    border: none;
    border-radius: 8px;

    font-weight: 600;

    cursor: pointer;

    ${({ btnSize }) => {
        switch (btnSize) {
            case "big":
                return css`
                    height: 60px;
                    padding: 0 40px;

                    font-size: 16px;
                `
            case "small":
                return css`
                    height: 40px;
                    padding: 0 20px;

                    font-size: 14px;
                `
        }
    }}

    ${({ btnColor }) => {
        switch (btnColor) {
            case "green":
                return css`
                    background-color: var(--primary50);

                    color: var(--white);

                    &:hover {
                        background-color: var(--primary);
                    }
                `
            case "gray":
                return css`
                    background-color: var(--gray100);

                    color: var(--gray300);

                    &:hover {
                        background-color: var(--gray300);

                        color: var(--gray100);
                    }
                `
        }
    }}
`