import React from 'react';

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
                    }}>
                        <i className="fas fa-sign-out-alt"/>
                        Logout
                    </button>
                </Dropdown>
            </UserDropdownContainer>
        )
    }
} 

export default UserDropdown;