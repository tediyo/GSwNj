// components/MainContent.js
'use client'; // This makes the component a Client Component
import { Layout, Breadcrumb, Card, Row, Col } from 'antd';

const { Content } = Layout;

const MainContent = () => {
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
              Content for the first vertical card.
            </Card>
          </Col>
          <Col span={12}>
            <Card 
              title="Card 2" 
              bordered={true}
              style={{ backgroundColor: '#D9D9D9', minHeight: 300 }}
            >
              Content for the second vertical card.
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
