import './index.scss';

import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './../routes';
import DefaultSider from './components/DefaultSider';

const { Content, Footer } = Layout;

class DefaultLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <DefaultSider />
        <Layout>
          <Content className="layout-content">
            <Switch>
              {ROUTES.map((route) => (
                <Route
                  exact
                  path={route.path}
                  key={`route-${route.path}`}
                  component={route.component}
                />
              ))}
            </Switch>
          </Content>
          <Footer className="layout-footer">
            Semih Celik 2018 React - Antd - Router Boilerplate
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
