import React from 'react';
import { connect } from 'react-redux';

import { FormContainer, Form } from './addChannelStyles.js';
import { addChannel } from '../../../store/actions/ChannelActions.js';

class AddChannelForm extends React.Component{
    state={
        formData: {
            channelName: '',
            youtube: '',
            discord: '',
            twitter: '',
            donate: '',
            reddit: '',
            instagram: '',
            verified: false,
        }
    }

    handleChange = e => {
        this.setState({
          formData:{
            ...this.state.formData,
            [e.target.name]: e.target.value
          }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addChannel(this.state.formData, () => this.props.handleClose('addChannelModalIsOpen'));
        this.setState({
            formData: {
                channelName: '',
                youtube: '',
                discord: '',
                twitter: '',
                donate: '',
                reddit: '',
                instagram: '',
                verified: false,
            }
        })
    }

    render(){
        const { formData } = this.state;

        return(
            <FormContainer>
                <Form onSubmit={this.handleSubmit}>
                    <label htmlfor="channelName">Channel Name</label>
                    <input 
                        type="text"
                        name="channelName"
                        onChange={this.handleChange}
                        value={formData.channelName}
                        required
                    />
                    <label htmlfor="youtube">Channel ID</label>
                    <input 
                        type="text" 
                        name="youtube"
                        value={formData.youtube}
                        onChange={this.handleChange}
                        required
                    />
                    <label htmlfor="discord">Discord Link</label>
                    <input 
                        type="text" 
                        name="discord"
                        value={formData.discord}
                        onChange={this.handleChange}
                    />
                    <label htmlfor="twitter">Twitter Link</label>
                    <input 
                        type="text" 
                        name="twitter"
                        value={formData.twitter}
                        onChange={this.handleChange}
                    />
                    <label htmlfor="donate">Donate Link</label>
                    <input 
                        type="text" 
                        name="donate"
                        value={formData.donate}
                        onChange={this.handleChange}
                    />
                    <label htmlfor="reddit">Reddit Link</label>
                    <input 
                        type="text" 
                        name="reddit"
                        value={formData.reddit}
                        onChange={this.handleChange}
                    />
                    <label htmlfor="instagram">Instagram Link</label>
                    <input 
                        type="text" 
                        name="instagram"
                        value={formData.instagram}
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        Add Channel
                    </button>
                </Form>
            </FormContainer>
        )
    }
}


export default connect(
    null,
    {
        addChannel
    }
)(AddChannelForm);