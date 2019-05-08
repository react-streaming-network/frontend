import styled from 'styled-components';

import  { spacing, paper, primary, secondary } from '../../main-stylesheet';

export const MainContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const NavMenuContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    left: 0;
    width: 350px;
    height: 100%;
    ${paper};
    background-color: ${primary};
`;

export const NavItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${spacing * 3}px 0px;
    width: 100%;
`;

export const NavItem = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: ${spacing/2}px 0;
    border: unset;
    font-size: 1.4rem;
    font-weight: 300;
    color: #FFFFFF;
    background-color: unset;
    transition: .2s;
    i{
        margin-right: ${spacing/1.5}px;
    }
    &:hover{
        cursor: pointer;
        color: ${secondary};
        background-color: rgba(0, 0, 0, 0.15);
    }
    &:focus{
        outline: none;
    }
`;