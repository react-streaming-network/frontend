import React from 'react';
import { connect } from 'react-redux';

import { fetchChannels } from '../../../store/actions/ChannelActions.js';
import { 
    MainContainer, 
    NavMenuContainer, 
    NavItem,
    NavItemContainer
} from './navMenuStyles.js';

export const NavMenu = ({ handleToggle, open, fetchChannels}) => (
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
                {localStorage.getItem('role') === 'admin' && 
                <NavItem onClick={() => {
                    handleToggle('navMenuIsOpen');
                    handleToggle('addChannelModalIsOpen');
                }}>
                    <i className="fas fa-user-plus"/>
                    Add Channel
                </NavItem>}
                {localStorage.getItem('token') && 
                <NavItem onClick={() => {
                    handleToggle('navMenuIsOpen');
                    localStorage.clear();
                    fetchChannels();
                }}>
                    <i className="fas fa-sign-out-alt"/>
                    Logout
                </NavItem>}
            </NavItemContainer>
        </NavMenuContainer>
    </MainContainer>
)

export default connect(
    null,
    {
        fetchChannels
    }
)(NavMenu);