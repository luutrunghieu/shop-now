import React from 'react';
import './_register-card.scss';
import { Card, Input, Button, Form, Icon } from 'antd';
import { Link } from 'react-router-dom';
const Register = props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form className='register-form'>
      <h1 className='register-title'>REGISTER</h1>
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
        {getFieldDecorator('confirmPassword', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='password'
            placeholder='Confirm Password'
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' className='register-form-button'>
          Register
        </Button>
        Or
        <Link to='/register'> Already have account</Link>
      </Form.Item>
    </Form>
  );
};
const RegisterForm = Form.create({ name: 'normal_register' })(Register);

const RegisterCard = props => {
  return (
    <div className='register-card'>
      <Card>
        <RegisterForm />
      </Card>
    </div>
  );
};

export default RegisterCard;
