import styled from 'styled-components';

import { secondary, primary, paper, spacing } from '../../main-stylesheet';

export const UserDropdownContainer = styled.div`
    img{
        height: 45px;
        width: 45px;
        border-radius: 25px;
        background-color: ${secondary};
        border: 2px solid ${secondary};
        box-shadow: 0px 0px 6px rgba(0,0,0,0.35);
        &:hover{
            cursor: pointer;
            text-shadow: 0px 0px 12px rgba(0,0,0,0.95);
            box-shadow: 0px 0px 12px rgba(0,0,0,0.45);
        }
        &:focus{
            outline: none;
        }
    }
    &:hover{
        .active{
            opacity: 1;
            transform: scale(1);
            margin-top: 0;
        }
    }
`

export const Dropdown = styled.div`
    opacity: 0;
    position: absolute;
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    width: 130px;
    margin-left: -80px;
    padding: ${spacing/2}px 0;
    ${paper};
    background-color: ${primary};
    transform: scale(0.6);
    margin-top: -20px;
    transition: .2s;
    button{
        width: 100%;
        border: unset;
        padding: ${spacing/1.5}px 0;
        color: #FFFFFF;
        box-shadow: unset;
        font-size: 0.9rem;
        i{
            margin-right: 5px;
        }
        &:hover{
            box-shadow: unset;
            color: ${secondary}
        }
    }
`