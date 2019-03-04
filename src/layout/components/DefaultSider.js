import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { ROUTES } from '../../routes';

const { Sider } = Layout;

function DefaultSider() {
  const [collapsed, setCollapsed] = useState(false);

  const lastPath = window.location.pathname;

  function toggleSider() {
    setCollapsed(!collapsed);
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="sider-collapser">
        <Icon
          type={`menu-${collapsed ? 'unfold' : 'fold'}`}
          onClick={toggleSider}
        />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[lastPath]}>
        {ROUTES.map((route) => (
          <Menu.Item key={route.path}>
            <Link to={route.path}>
              <Icon type={route.icon} />
              <span>{route.name}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default DefaultSider;
