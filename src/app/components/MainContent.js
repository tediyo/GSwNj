// components/MainContent.js
'use client'; // This makes the component a Client Component
import { Layout, Breadcrumb } from 'antd';

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
        Main Content Area
      </Content>
    </Layout>
  );
};

export default MainContent;
