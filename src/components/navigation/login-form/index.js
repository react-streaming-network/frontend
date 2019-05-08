import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormContainer, Form } from './loginFormStyles.js';
import { loginUser } from '../../../store/actions/AuthActions.js';

export class LoginForm extends Component {
  state = {
      formData: {
          username: '',
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
    this.props.loginUser(this.state.formData, () => this.props.handleClose('loginModalIsOpen'));
    this.setState({
      formData: {
        username: '',
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
            <button type="submit">
                Login
            </button>
        </Form>
        <div className="separator"/>
        <div className="oauth-login">
            <i className="fab fa-google"/>
            <i className="fab fa-facebook-f"/>
            <i className="fab fa-twitter"/>
        </div>
        <h3>Don't have an account? <span onClick={() => {
          handleClose('loginModalIsOpen');
          handleClose('registerModalIsOpen');
        }}>Sign Up</span></h3>
      </FormContainer>
    )
  }
}

export default connect(
  null,
  {
    loginUser
  }
)(LoginForm);
