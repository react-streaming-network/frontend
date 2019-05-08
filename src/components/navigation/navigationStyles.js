import styled from 'styled-components';

import { secondary } from '../main-stylesheet';

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 1360px;
    margin-bottom: 25px;
`;

export const LeftSection = styled.div`
    button{
        margin: unset;
        padding: unset;
        border: unset;
        background-color: transparent;
        font-size: 1.1rem;
        color: ${secondary};
        text-shadow: 0px 0px 6px rgba(0,0,0,0.35);
        transition: .2s;
        i{
            margin-right: 6px;
        }
        &:hover{
            cursor: pointer;
            text-shadow: 0px 0px 12px rgba(0,0,0,0.95);
        }
        &:focus{
            outline: none;
        }
    }
`;

export const RightSection = styled.div`
    button{
        margin: unset;
        padding: 5px 15px 3px 15px;
        border: 1.4px solid ${secondary};
        border-radius: 2px;
        background-color: transparent;
        font-size: 1rem;
        color: ${secondary};
        text-shadow: 0px 0px 6px rgba(0,0,0,0.35);
        box-shadow: 0px 0px 6px rgba(0,0,0,0.35);
        transition: .2s;
        &:hover{
            cursor: pointer;
            text-shadow: 0px 0px 12px rgba(0,0,0,0.95);
            box-shadow: 0px 0px 12px rgba(0,0,0,0.45);
        }
        &:focus{
            outline: none;
        }
    }
`;