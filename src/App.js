import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AppHeader from './components/header/Header';
import AppFooter from './components/footer/Footer';
import ProductCard from './components/product-card/ProductCard';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <AppHeader />
        <Content style={{ padding: '50px' }}>
          <Row gutter={32}>
            <Col span={6}>
              <ProductCard />
            </Col>
            <Col span={6}>
              <ProductCard />
            </Col>
            <Col span={6}>
              <ProductCard />
            </Col>
            <Col span={6}>
              <ProductCard />
            </Col>
            <Col span={6}>
              <ProductCard />
            </Col>
            <Col span={6}>
              <ProductCard />
            </Col>
            <Col span={6}>
              <ProductCard />
            </Col>
          </Row>
        </Content>
        <AppFooter />
      </Layout>
    </div>
  );
}

export default App;
