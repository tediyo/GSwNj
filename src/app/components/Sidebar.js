// components/Sidebar.js
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          User
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Videos
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Upload
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
