import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;

    height: 80px;

    background-color: #F5F5F5;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 0 auto;
        width: 100%;
        max-width: 1250px;
    }

    .nav__container {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    @media (max-width: 1360px) {
        & > div {
            width: 80%;
        }
    }

    @media (max-width: 950px) {
        height: max-content;

        padding: 50px 0;

        & > div {
            flex-direction: column;
            gap: 20px;
        }

    }

`

export const InputSearchContainer = styled.div`
    position: relative;

    input {
        width: 365px;
        height: 60px;
        padding: 0 100px 0 15px;

        border: 2px solid var(--gray100);
        border-radius: 8px;
    }

    input:focus {
        border: 2px solid #333333;
    }

    .btn__search {
        position: absolute;
        right: 10px;
        top: 10px;

        height: 40px;

        padding: 0 20px;

        border: none;
        border-radius: 8px;

        background-color: var(--primary50);

        cursor: pointer;
    }

    .btn__search:hover {
        background-color: var(--primary);
    }

    @media (max-width: 470px) {
        input {
            width: 250px;
        }
    }
`

export const CartBtn = styled.button`
    position: relative;

    height: fit-content;

    border: none;
    
    background: none;

    cursor: pointer;

    & > span {
        position: absolute;
        top: -12px;
        right: -9px;

        padding: 3px 4px;

        border-radius: 5px;

        font-weight: 900;
        font-size: 14px;
        color: var(--white);

        background-color: var(--primary);
    }
`

export const LogoutBtn = styled.button`
    border: none;

    background: none;

    cursor: pointer;
`

export const Main = styled.main`
    margin: 60px auto;
    width: 100%;
    max-width: 1250px;

    @media (max-width: 1360px) {
        width: 80%;
    }
`

export const ListContainer = styled.ul`
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    gap: 56px;

    @media (max-width: 1360px) {
        justify-content: space-between;
    }

    @media (max-width: 744px) {
        flex-wrap: nowrap;
        overflow-x: auto;
    }
`

export const CardContainer =  styled.li`
    display: flex;
    flex-direction: column;

    min-width: 270px;
    width: 270px;
    height: 346px;

    border: 2px solid #E0E0E0;
    border-radius: 5px;

    .content__container {
        display: flex;
        flex-direction: column;
        justify-content:space-between;

        height: 100%;
        padding: 20px;
    }

    .content__container > h3 {
        font-weight: 700;
        font-size: 18px;
        color: #333333;
    }

    .content__container > span {
        font-weight: 400;
        font-size: 12px;
        color: #828282;
    }

    .content__container > span + span {
        font-weight: 600;
        font-size: 14px;
        color: #27AE60;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 150px;

    background-color: #F5F5F5;

    img {
        height: 150px;
    }
`

export const FilterSearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    
    margin-bottom: 30px;

    & > h2 {
        font-weight: 700;
        font-size: 26px;
        color: #333333;
    }

    & > h2 > span {
        color: #828282;
    }
`
export const ProductNotFound = styled.div`
    margin-bottom: 40px;
`