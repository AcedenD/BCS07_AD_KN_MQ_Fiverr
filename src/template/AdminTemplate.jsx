import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { layDuLieuLocal } from "../utils/localStore";

const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  useEffect(() => {
    const user = layDuLieuLocal("user");
    if (user) {
      if (user.user.role !== "ADMIN") {
        navigate("../");
      } else {
        navigate("../admin/user");
      }
    }
  }, []);

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="demo-logo-vertical bg-[#0a8e59
          ] border-b border-[#83f6c7]"
        >
          <NavLink
            className="text-2xl text-white font-bold text-center w-full py-4 px-2 flex items-center justify-center hover:text-white"
            to="/"
          >
            <img
              src="https://freelogopng.com/images/all_img/1656738037fiverr-icon-png.png"
              className="h-8"
              alt="Fiverr Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CyberMovie
            </span> */}
            {collapsed ? <></> : <span className="ml-3">fiverr.</span>}
          </NavLink>
        </div>
        <Menu
          className=""
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <i className="fa-solid fa-user" />,
              label: <NavLink to="/admin/user">User</NavLink>,
            },
            {
              key: "2",
              icon: <i className="fa-solid fa-newspaper" />,
              label: <NavLink to="/admin/job">Job</NavLink>,
            },
            {
              key: "3",
              icon: <i className="fa-solid fa-briefcase" />,
              label: <NavLink to="/admin/job-type">JobType</NavLink>,
            },
            {
              key: "4",
              icon: <i className="fa-solid fa-pen-to-square" />,
              label: <NavLink to="/admin/service">Service</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
