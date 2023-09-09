import { useState } from 'react';
import { /* Breadcrumb, */ Layout, Menu } from 'antd';
const { /* Header, Content, Footer, */ Sider } = Layout;
import {
    DesktopOutlined,

    PieChartOutlined,
    TeamOutlined,

  } from '@ant-design/icons';

export function SideMenu() {
    const [collapsed, setCollapsed] = useState(false);
    function getItem(label, key, icon, children) {
        return {
          key,
          icon,
          children,
          label,
        };
      }
    const items = [
        getItem('Home', '1', <PieChartOutlined />),
        getItem('First Exercise', '2', <DesktopOutlined />),
        getItem('Second Exercise', 'sub2', <TeamOutlined />) 
      ];
      
    return (
        <>
            <Layout hasSider>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{height: "100vh"}}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            </Layout>
      
        </>
        
    );
}   