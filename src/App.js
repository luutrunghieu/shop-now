import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';
import { firestore } from './firebase.js';

import AppHeader from './components/header/Header';
import AppFooter from './components/footer/Footer';
import ProductCard from './components/product-card/ProductCard';
import LoginCard from './components/login-card/LoginCard';
import RegisterCard from './components/register-card/RegisterCard';

import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await firestore.collection('products').get();
      const products = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
      return products;
    };
    fetchProducts().then(fetchedProducts => setProducts(fetchedProducts));
  }, []);

  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <AppHeader />
          <Content style={{ padding: '50px' }}>
            <Switch>
              <Route exact path='/'>
                <Row gutter={32}>
                  {products.map(product => (
                    <Col span={6} key={product.id}>
                      <ProductCard product={product} />
                    </Col>
                  ))}
                </Row>
              </Route>
              <Route exact path='/login'>
                <LoginCard />
              </Route>
              <Route exact path='/register'>
                <RegisterCard />
              </Route>
            </Switch>
          </Content>
          <AppFooter />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
