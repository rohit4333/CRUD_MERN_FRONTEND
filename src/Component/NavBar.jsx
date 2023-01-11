import { AppBar, Toolbar, styled, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const Logo = styled(Typography)`
  color: #ffffff;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Logo>Contact Manager</Logo>
        <Tabs to="/" exact>
          All Users
        </Tabs>
        <Tabs to="add" exact>
          Add User
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
