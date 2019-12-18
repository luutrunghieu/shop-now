import React from 'react';
import './_header.scss';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
const AppHeader = () => {
  return (
    <Header className='header'>
      <Link to='/'>
        <div className='logo'>Online Store</div>
      </Link>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
        className='header-navbar'
        style={{ float: 'right' }}
      >
        <Menu.Item key='1'>
          <Link to='/login'>Login</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/register'>Register</Link>
        </Menu.Item>
        <Menu.Item key='3'>Checkout</Menu.Item>
      </Menu>
    </Header>
  );
};
export default AppHeader;
