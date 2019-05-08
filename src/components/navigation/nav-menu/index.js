import React from 'react';

import { 
    MainContainer, 
    NavMenuContainer, 
    NavItem,
    NavItemContainer
} from './navMenuStyles.js';

export const NavMenu = ({ handleToggle, open }) => (
    <MainContainer 
        onClick={() => {
            handleToggle('navMenuIsOpen')
        }}
    >
        <NavMenuContainer 
            onClick={e => e.stopPropagation()}
        >
            <NavItemContainer>
                <NavItem onClick={() => {
                    handleToggle('navMenuIsOpen');
                }}>
                    <i className="fas fa-broadcast-tower"/>
                    Live Streams
                </NavItem>
                <NavItem onClick={() => {
                    handleToggle('navMenuIsOpen');
                    handleToggle('addChannelModalIsOpen');
                }}>
                    <i className="fas fa-user-plus"/>
                    Add Channel
                </NavItem>
                <NavItem onClick={() => {
                    handleToggle('navMenuIsOpen');
                    localStorage.clear();
                }}>
                    <i className="fas fa-sign-out-alt"/>
                    Logout
                </NavItem>
            </NavItemContainer>
        </NavMenuContainer>
    </MainContainer>
)

export default NavMenu;