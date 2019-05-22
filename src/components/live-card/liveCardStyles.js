import styled from "styled-components";
import { paper, transparentPrimary, secondary } from '../main-stylesheet';

export const CardContainer = styled.div`
    display: flex;
    height: 250px;
    width: 435px;
    margin: 13px;
    color: #ffffff;
    font-size: 0.9rem;
    ${paper}
    iframe{
        width: 100%;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 408px;
    height: 225px;
    padding: 13px;
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        width: 80%;
        color: #ffffff;
        text-decoration: none;
        font-weight: 500;
        text-shadow: 0 0 5px rgba(0,0,0,1);
    }
    .right-section{
        display: flex;
        align-items: center;
        background-color: ${transparentPrimary};
        padding: 6px;
        color: #ffffff;
        div{
            height: 10px;
            width: 10px;
            border-radius: 5px;
            background-color: red;
            margin-right: 5px;
        }
    }
`;

export const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    a{
        display: flex;
        align-items: center;
        background-color: ${transparentPrimary};
        padding: 6px;
        color: #ffffff;
        text-decoration: none;
        img{
            width: 18px;
            height: 18px;
            margin-right: 5px;
            border-radius: 15px;
            background-color: ${secondary};
        }
    }
    button{
        display: flex;
        align-items: center;
        background-color: ${transparentPrimary};
        padding: 6px;
        border: unset;
        color: #ffffff;
        text-decoration: none;
        &:hover{
            cursor: pointer;
            
        }
    }
`;