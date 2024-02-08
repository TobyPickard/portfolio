// Sidebar.js

import { Link } from 'react-router-dom';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';

const AppSidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  };

  return <Sidebar collapsed={isSidebarCollapsed} className="app">
    <Menu>
      <MenuItem onClick={toggleSideBar} className="menu1" icon={<MenuRoundedIcon />} />
      <MenuItem component={ <Link to="/" /> } icon={<HomeRoundedIcon />}> Home </MenuItem>
      <MenuItem component={ <Link to="/about" /> } icon={<GridViewRoundedIcon />}> About </MenuItem>
      <MenuItem component={ <Link to="/contact" /> } icon={<ImportContactsRoundedIcon />}> Contact </MenuItem>
      <MenuItem component={ <Link to="/projects" /> } icon={<CodeRoundedIcon />}> Projects </MenuItem>
      <MenuItem component={ <Link to="/logout" /> } icon={<LogoutRoundedIcon />}> Logout </MenuItem>
    </Menu>
  </Sidebar>
};

export default AppSidebar;
