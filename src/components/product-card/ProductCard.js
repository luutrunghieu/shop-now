import React from 'react';
import './_product-card.scss';
import { Card, Row, Col, Button } from 'antd';
const { Meta } = Card;
const ProductCard = props => {
  return (
    <div className="section product-card">
      <Card hoverable cover={<img alt='example' src={props.product.data.image}/>}>
        <Meta 
          title={props.product.data.name}
          description={props.product.data.description} 
        />
        <Row className="section vertical-align-center">
  <Col span={12} className="price"> ${props.product.data.price}</Col>
          <Col span={12}>
            <Button style={{float: 'right'}} type="primary">Add to cart</Button>
          </Col>
        </Row>
      </Card>
    </div>
    
  );
};

export default ProductCard;
