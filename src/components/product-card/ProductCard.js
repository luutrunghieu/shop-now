import React from 'react';
import './_product-card.scss';
import { Card, Row, Col, Button } from 'antd';
const { Meta } = Card;
const ProductCard = props => {
  return (
    <div className="section product-card">
      <Card hoverable cover={<img alt='example' src='/product-1.jpg'/>}>
        <Meta 
          title='Apple MacBook Pro 15-Inch (2018)' 
          description='3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs...' 
        />
        <Row className="section vertical-align-center">
          <Col span={12} className="price"> $2399</Col>
          <Col span={12}>
            <Button style={{float: 'right'}} type="primary">Add to cart</Button>
          </Col>
        </Row>
      </Card>
    </div>
    
  );
};

export default ProductCard;
