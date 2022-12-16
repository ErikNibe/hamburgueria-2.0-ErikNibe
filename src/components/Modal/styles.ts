import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;

    inset: 0;
    width: 100%;
    height: 100vh;

    z-index: 99;

    background-color: rgba(0,0,0,.5);
`

export const ModalContainer = styled.div`
    margin-top: 80px;

    width: 500px;

    .header__modal {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 56px;

        padding: 13px 22px;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        background-color: var(--primary);
    }

    .header__modal > h3 {
        font-weight: 700;
        font-size: 18px;
        color: var(--white);
    }

    .header__modal > button {
        border: none;

        background: none;

        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF80;

        cursor: pointer;
    }
`

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    height: 158px;

    padding: 50px 20px;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: var(--gray0);

    & > p {
        font-weight: 700;
        font-size: 18px;
        color: var(--gray600);
    }

    & > span {
        font-weight: 400;
        font-size: 14px;
        color: var(--gray300);

        cursor: pointer;
    }
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;

    background-color: var(--gray0);

    & > ul {
        display: flex;
        flex-direction: column;
        gap: 18px;

        max-height: 200px;

        overflow-y: auto;

        padding-bottom: 15px;

        border-bottom: 2px solid var(--gray100);
    }
`

export const CardContainer = styled.li`
    display: flex;
    gap: 10px;

    .img__container {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 80px;

        border-radius: 5px;

        background-color: var(--gray100);

        img {
            height: 80px;
        }
    }

    .info__product__container {
        display: flex;
        justify-content: space-between;

        width: 100%;
    }

    .info__product {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .btn__counter {
        display: flex;
        flex-direction: row;

        width: 105px;
        height: 30px;

        button {
            height: 100%;
            width: 30%;

            border: none;

            font-weight: 400;
            font-size: 22px;
            color: var(--secundary);

            background-color: var(--gray100);

            cursor: pointer;
        }

        button:hover {
            background-color: var(--gray200);
        }

        & > div {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 30px;
            width: 40%;

            border-top: 2px solid var(--gray100);
            border-bottom: 2px solid var(--gray100);
        }
    }

    .btn__remove {
        border: none;
        background: none;
        height: fit-content;
    }

    .bin__icon {
        width: 15px;
        height: 17px;

        cursor: pointer;
    }
`

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 15px;
    margin-bottom: 20px;

    font-weight: 600;
    font-size: 14px;

    & > h5 {
        color: var(--gray600);
    }

    & > span {
        color: var(--gray300);
    }
`