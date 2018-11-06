import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
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
                <Link to="/Report">
                  <Icon type="pie-chart" />
                  <span>General report</span>
                </Link>
              </Menu.Item>

              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>Scraping</span>
                  </span>
                }
              >
                <Menu.Item key="2">
                  <NavLink to="/Basic"> Basic </NavLink>
                </Menu.Item>

                <Menu.Item key="3">
                  <Link to="/Post"> Post </Link>
                </Menu.Item>

                <Menu.Item key="4">
                  <Link to="/Stories"> Stories </Link>
                </Menu.Item>

                <Menu.Item key="5">
                  <Link to="/Audience"> Audience </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team Developer</Menu.Item>
                <Menu.Item key="7">Team Marketing</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ minHeight: 620 }}>
                <Routes />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Haip Developers ©2019 Created by Herhu
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
