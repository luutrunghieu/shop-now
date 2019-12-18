import React from 'react';
import './_login-card.scss';
import { Card, Input, Button, Form, Icon, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
const Login = props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form className='login-form'>
      <h1 className='login-title'>LOGIN</h1>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(<Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Username' />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='password'
            placeholder='Password'
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <Link className='login-form-forgot' to='/'>
          Forgot password
        </Link>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Log in
        </Button>
        Or
        <Link to="/register"> register now!</Link>
      </Form.Item>
    </Form>
  );
};
const LoginForm = Form.create({ name: 'normal_login' })(Login);

const LoginCard = props => {
  return (
    <div className='login-card'>
      <Card>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginCard;
