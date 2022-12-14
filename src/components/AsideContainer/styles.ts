import styled from "styled-components";

export const AsideBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    max-width: 400px;
    width: 100%;

    .logo__img {
        width: 230px;
        height: 35px;
    }

    & > div {
        display: flex;
        justify-content:space-between;

        width: 377px;
        height: 95px;

        padding: 17px 14px;

        border: 1px solid var(--gray100);
        border-radius: 5px;
    }

    .shop__bag__container {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 60px;
        height: 60px;

        border-radius: 5px;

        background-color: #27AE601A;
    }

    & > div > p {
        max-width: 261px;

        font-weight: 500;
        font-size: 14px;

        color: var(--gray300);
    }

    & > div > p > span {
        font-weight: 400;
        color: var(--gray600);
    }

    .dots__img {
        width: 180px;
        height: 79px;
    }

    @media (max-width: 970px) {
        margin-bottom: 20px;

        .dots__img {
            display: none;
        }
    }

    @media (max-width: 560px) {
        & > div {
            max-width: 100%;
        }

        & > div > p {
            max-width: 75%;
        }
    }

`
