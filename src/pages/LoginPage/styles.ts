import styled from "styled-components";

import {Link as LinkRouter} from "react-router-dom";

export const Link = styled(LinkRouter)`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 60px;

    padding: 0 40px;

    border: none;
    border-radius: 8px;

    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    color: var(--gray200);

    background-color: var(--gray0);

    &:hover {
        background-color: var(--gray300);

        color: var(--gray0);
    }
`