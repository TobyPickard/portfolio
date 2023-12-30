// Sidebar.js

import { Link } from 'react-router-dom';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
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
        <SubMenu label="Projects" component={ <Link to="/list-projects" /> } icon={<CodeRoundedIcon />}>
          <MenuItem component={ <Link to="/proj1" /> } icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
          <MenuItem component={ <Link to="/proj2" /> } icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
        </SubMenu>
        <MenuItem component={ <Link to="/logout" /> } icon={<LogoutRoundedIcon />}> Logout </MenuItem>
      </Menu>
    </Sidebar>
};

export default AppSidebar;
