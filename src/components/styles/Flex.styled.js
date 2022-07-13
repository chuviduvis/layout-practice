import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div, 
    & > ul {
        flex: 1 1 0;
    }
    @media(max-width: ${({ theme })=> theme.mobile}){
        flex-direction: column;
        text-align: center;
    }
`