import React from 'react';

import {
    NavBarContainer,
    LeftSection,
    RightSection
} from './navigationStyles.js';
import Modal from '../modal';
import NavMenu from './nav-menu';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import AddChannelForm from './add-channel-form';
import UserDropdown from './user-dropdown';

class NavBar extends React.Component{
    state={
        loginModalIsOpen: false,
        registerModalIsOpen: false,
        navMenuIsOpen: false,
        addChannelModalIsOpen: false,
    }

    toggleStateBoolean = stateValue => {
        this.setState({
            [stateValue]: !this.state[stateValue]
        })
    }

    render(){

        const { 
            loginModalIsOpen, 
            registerModalIsOpen, 
            navMenuIsOpen,
            addChannelModalIsOpen
        } = this.state;

        return(
            <>
                <NavBarContainer>
                    <LeftSection>
                        <button onClick={() => this.toggleStateBoolean('navMenuIsOpen')}>
                            <i className="fas fa-bars"/>
                            MENU
                        </button>
                    </LeftSection>
                    <RightSection outline>
                        {!localStorage.getItem('token') ?
                            <button onClick={() => this.toggleStateBoolean('loginModalIsOpen')}>
                                LOGIN
                            </button> :
                            <UserDropdown/>
                        }
                    </RightSection>
                </NavBarContainer>

                {loginModalIsOpen &&
                    <Modal
                        header="LOGIN"
                        handleClose={() => this.toggleStateBoolean('loginModalIsOpen')}
                        Component={LoginForm}
                        props={{
                            handleClose: this.toggleStateBoolean
                        }}
                    />
                }

                {registerModalIsOpen &&
                    <Modal
                        header="REGISTER"
                        handleClose={() => this.toggleStateBoolean('registerModalIsOpen')}
                        Component={RegisterForm}
                        props={{
                            handleClose: this.toggleStateBoolean
                        }}
                    />
                }


                {addChannelModalIsOpen &&
                    <Modal
                    header="ADD CHANNEL"
                    handleClose={() => this.toggleStateBoolean('addChannelModalIsOpen')}
                    Component={AddChannelForm}
                    props={{
                        handleClose: this.toggleStateBoolean
                    }}
                    />
                }
                
                {navMenuIsOpen && 
                    <NavMenu
                        handleToggle={this.toggleStateBoolean}
                        open={navMenuIsOpen}
                    />
                }
            </>
        )
    }
}

export default NavBar;