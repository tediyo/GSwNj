// pages/index.js
import { Layout } from 'antd';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const { Header, Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopBar />
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0' }}>
            <Sidebar />
            <MainContent />
          </Layout>
        </Content>
      </Layout>
    </Layout>
  );
}
