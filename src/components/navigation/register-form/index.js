import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormContainer, Form } from './registerFormStyles.js';
import { registerUser } from '../../../store/actions/AuthActions.js';

export class RegisterForm extends Component {
  state = {
      formData: {
          username: '',
          email: '',
          password: ''
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
    this.props.registerUser(this.state.formData, this.props.handleClose);
    this.setState({
      formData: {
        username: '',
        email: '',
        password: ''
      }
    })
  }

  render() {
    const { formData } = this.state;
    const { handleClose } = this.props;

    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
            <label htmlfor="username">Username</label>
            <input 
                type="text"
                name="username"
                onChange={this.handleChange}
                value={formData.username}
            />
            <label htmlfor="password">Password</label>
            <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={this.handleChange}
            />
            <label htmlfor="email">Email</label>
            <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={this.handleChange}
            />
            <button type="submit">
                Sign Up
            </button>
        </Form>
        <div className="separator"/>
        <div className="oauth-login">
            <i className="fab fa-google"/>
            <i className="fab fa-facebook-f"/>
            <i className="fab fa-twitter"/>
        </div>
        <h3>Already have an account? <span onClick={() => {
            handleClose('registerModalIsOpen');
            handleClose('loginModalIsOpen');
        }}>Login</span></h3>
      </FormContainer>
    )
  }
}

export default connect(
  null,
  {
    registerUser
  }
)(RegisterForm);