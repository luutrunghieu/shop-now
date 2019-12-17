import React from 'react';
import './_header.scss';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
const AppHeader = () => {
  return (
    <Header className='header'>
      <div className='logo'>Online Store</div>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
        className='header-navbar'
        style={{ float: 'right' }}
      >
        <Menu.Item key='1'>Login</Menu.Item>
        <Menu.Item key='2'>Register</Menu.Item>
        <Menu.Item key='3'>Checkout</Menu.Item>
      </Menu>
    </Header>
  );
};
export default AppHeader;
