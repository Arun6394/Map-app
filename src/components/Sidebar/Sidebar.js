import React from 'react';
import { Layout } from 'antd';
import FormInput from '../FormInput/FormInput';
import "./Sidebar.css"

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider className="sidebar">
      <FormInput />
    </Sider>
  );
};

export default Sidebar;
