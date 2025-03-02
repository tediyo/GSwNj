// components/TopBar.js
'use client'; // This makes the component a Client Component

import { Layout, Menu } from 'antd';
import { useState } from 'react';

const { Header } = Layout; // Head is the sub component of Layout(Main Container) for creating Header Section

const TopBar = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']);

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>My App</div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selectedKeys}
        onClick={(e) => setSelectedKeys([e.key])}
        style={{ marginLeft: 'auto' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header>
  );
};

export default TopBar;
