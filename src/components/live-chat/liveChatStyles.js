import styled from "styled-components";

import { paper, secondary } from '../main-stylesheet';

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 395px;
    height: 476px;
    padding: 18px;
    margin: 13px;
    ${paper}
    h1{
        color: #FFFFFF;
        font-size: 1.2rem;
        border-bottom: 1px solid ${secondary};
        padding-bottom: 13px;
    }
`;

export const Chat = styled.div`
    height: 100%;
    overflow-y: hidden;
`;

export const MessageContainer = styled.div`
    display: flex;
    margin: 10px 5px;
    img{
        height: 25px;
        width: 25px;
        border: 1px solid ${secondary};
        border-radius: 15px;
        margin-right: 5px;
    }
    p{
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        font-size: 0.8rem;
        font-weight: 300;
        line-height: 1rem;
        a{
            color: #FFFFFF;
            font-weight: 400;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`;