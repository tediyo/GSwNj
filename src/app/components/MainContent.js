// components/MainContent.js
'use client'; // This makes the component a Client Component
import { useState, useEffect } from 'react';
import axios from 'axios'; // Only if using Axios for API requests
import { Layout, Breadcrumb, Card, Row, Col } from 'antd';

const { Content } = Layout;

const MainContent = () => {
  const [card1Data, setCard1Data] = useState(null);
  const [card2Data, setCard2Data] = useState(null);

  useEffect(() => {
    // Replace with your actual endpoints
    const fetchCard1Data = async () => {
      try {
        const response = await axios.get('https://api.example.com/card1');
        setCard1Data(response.data);
      } catch (error) {
        console.error('Error fetching card 1 data:', error);
      }
    };

    const fetchCard2Data = async () => {
      try {
        const response = await axios.get('https://api.example.com/card2');
        setCard2Data(response.data);
      } catch (error) {
        console.error('Error fetching card 2 data:', error);
      }
    };

    fetchCard1Data();
    fetchCard2Data();
  }, []);

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: '#fff',
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card 
              title="Card 1" 
              bordered={true}
              style={{ backgroundColor: '#D9D9D9', minHeight: 300 }}
            >
              {card1Data ? (
                <div>{card1Data.content}</div> // Customize based on your data structure
              ) : (
                'Loading...'
              )}
            </Card>
          </Col>
          <Col span={12}>
            <Card 
              title="Card 2" 
              bordered={true}
              style={{ backgroundColor: '#D9D9D9', minHeight: 300 }}
            >
              {card2Data ? (
                <div>{card2Data.content}</div> // Customize based on your data structure
              ) : (
                'Loading...'
              )}
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col span={24}>
            <Card 
              title="Card 3" 
              bordered={true}
              style={{ backgroundColor: '#D9D9D9', minHeight: 150 }}
            >
              Content for the horizontal card below.
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MainContent;
