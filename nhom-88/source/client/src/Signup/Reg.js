import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import Menu from '../Components/Menu_';
import {Form, Input, Icon, Button} from 'antd';
import { registerUserAction } from '../Actions/authenticationActions';

class RegisterPage extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    console.log(data);
    this.props.dispatch(registerUserAction(data));
  }

  render() {
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty('response')) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }
    
    return (
      <React.Fragment>
        <Menu/>
        
        <div id="page-container">
        <h2>Signup to Twituet</h2>

        {!isSuccess ? <div>{message}</div> : browserHistory.push('login')}

        <Form onSubmit={this.onHandleRegistration} className="login-form" >

          <Form.Item>
              <Input type="email" name="email" prefix={<Icon type="user" 
                    style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          </Form.Item>

          <Form.Item>
              <Input type="password" name="password" prefix={<Icon type="lock" 
                    style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
          </Form.Item>


          <Form.Item>
              <Input type="password" name ="repassword"prefix={<Icon type="lock" 
                    style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Repeat password" />
          </Form.Item>
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign Up
          </Button>

        </Form>
        </div>
        </React.Fragment>
    );
}}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(RegisterPage);