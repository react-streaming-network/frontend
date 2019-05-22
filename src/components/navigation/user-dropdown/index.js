import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchChannels } from '../../../store/actions/ChannelActions.js';
import { UserDropdownContainer, Dropdown } from './userDropdownStyles.js';

export class UserDropdown extends React.Component{
    render(){
        return(
            <UserDropdownContainer>
                <img 
                    src="https://yt3.ggpht.com/a/AGF-l7-JbFjGx9GOFmiYHfQjWhvwi7M_FWdMOE2kKg=s288-mo-c-c0xffffffff-rj-k-no" 
                    alt=""
                    onClick={() => {
                        
                    }}
                />
                <Dropdown className='active'>
                    <button>
                        <i className="fas fa-user"/>
                        Account
                    </button>
                    <button onClick={() => {
                        localStorage.clear();
                        this.props.fetchChannels();
                        toast.success("Logged Out")
                    }}>
                        <i className="fas fa-sign-out-alt"/>
                        Logout
                    </button>
                </Dropdown>
            </UserDropdownContainer>
        )
    }
} 

export default connect(
    null,
    {
        fetchChannels
    }
)(UserDropdown);