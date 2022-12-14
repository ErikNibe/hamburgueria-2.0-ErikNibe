import styled from "styled-components";

export const ContainerIndex = styled.div`
    display: flex;
    justify-content: space-between;

    max-width: 939px;
    width: 100%;

    margin: 98px auto;

    @media (max-width: 970px) {
        flex-direction: column-reverse;

        width: max-content;
    }

    @media (max-width: 560px) {
        width: 90%;
    }
`