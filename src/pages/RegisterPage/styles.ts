import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

export const HeaderRegister = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Link = styled(LinkRouter)`
    font-weight: 500;
    font-size: 14px;
    color: var(--gray300);

    &:hover {
        color: var(--gray200);
    }
`