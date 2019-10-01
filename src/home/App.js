import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import { Link, NavLink, BrowserRouter } from 'react-router-dom';
import Routes from '../config/routes';

const { Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="user" />
                  <span>Alberto Mordoj</span>
                </Link>
              </Menu.Item>

              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="pie-chart" />

                    <span>Reportes</span>
                  </span>
                }
              >
                <Menu.Item key="2">
                  <Link to="/inscritos"> Inscritos </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <NavLink to="/encuesta/empresa"> Encuesta empresa </NavLink>
                </Menu.Item>

                <Menu.Item key="4">
                  <Link to="/encuesta/persona"> Encuesta personal </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <div style={{ minHeight: 620 }}>
                <Routes />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Developers ©2019 Created by Herhum
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
