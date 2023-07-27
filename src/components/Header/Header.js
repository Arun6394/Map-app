import React from 'react';
import { Layout, Button } from 'antd';
import "./Header.css"

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="header"  >
      <Button className="dummy-login-button" type="primary">
        Login
      </Button>
      <Button className="dummy-profile-button">Profile</Button>
    </AntHeader>
  );
};

export default Header;
