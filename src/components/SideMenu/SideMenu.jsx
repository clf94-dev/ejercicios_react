import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { /* Breadcrumb, */ Layout, Menu } from 'antd';
const { /* Header, Content, Footer, */ Sider } = Layout;
import {
    DesktopOutlined,

    PieChartOutlined,
    TeamOutlined,

  } from '@ant-design/icons';

export function SideMenu() {
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
    setCurrent(e.key);
  };
      
    return (
        <>
            <Layout hasSider>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{height: "100vh"}}>
                <div className="demo-logo-vertical" />
                <Menu onClick={onClick} selectedKeys={[current]} mode="inline" theme='dark'>
                    <Menu.Item key="home" icon= {<DesktopOutlined />}>
                     <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="first" icon= {<TeamOutlined />}>
                      <Link to="/firstexercise">First Exercise</Link>
                    </Menu.Item>
                    <Menu.Item key="second" icon= {<PieChartOutlined />}>
                      <Link to="/secondexercise">Second Exercise</Link>
                    </Menu.Item>
                </Menu>
                <Outlet/>
            </Sider>
            </Layout>
      
        </>
        
    );
}   