import styled from 'styled-components';

import { primary } from '../../components/main-stylesheet';

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
`;

export const ChatSection = styled.div`
    width: 20%;
    height: 100%;
    background-color: ${primary};
    iframe{
        width: 100%;
        height: 100%;
    }
`;