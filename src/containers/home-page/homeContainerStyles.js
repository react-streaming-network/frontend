import styled from 'styled-components';

import { bg, paper } from '../../components/main-stylesheet'; 

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;

export const HeadingSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 200px;
    ${paper};
    background-color: ${bg};
`;

export const FeaturedSection = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color: #FFFFFF;
        margin-left: 13px;
        font-size: 1.6rem;
        font-weight: 400;
    }
    .container{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
`;

export const LiveSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: -160px 0 10px 0;
    width: 1385px;
    h1{
        margin-left: 13px;
        font-size: 1.6rem;
        font-weight: 400;
        color: #FFFFFF;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ChannelSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 1385px;
    h1{
        margin-left: 13px;
        font-size: 1.6rem;
        font-weight: 400;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;