import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useMediaQuery from '@mui/material/useMediaQuery';

// import ThemeSwitch from "./ThemeSwitch";

import { setActiveTheme } from "../redux/slices/themeSlice";

// Props validation 
import PropTypes from 'prop-types';

SidebarComponent.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
};

export default function SidebarComponent({ isToggled, setToggle }) {

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.activeTheme);

    const [collapsed, setCollapsed] = useState(false);

    const isMobile = useMediaQuery('(min-width: 768px)');

    const [hasImage, setHasImage] = useState(false);

    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const themes = {
        light: {
            sidebar: {
                backgroundColor: '#ffffff',
                color: '#607489',
            },
            menu: {
                menuContent: '#44596e',
                icon: '#0098e5',
                hover: {
                    backgroundColor: '#c5e4ff',
                    color: '#44596e',
                },
                disabled: {
                    color: '#9fb6cf',
                },
            },
        },
        dark: {
            sidebar: {
                backgroundColor: '#0b2948',
                color: '#8ba1b7',
            },
            menu: {
                menuContent: '#b6c8d9',
                icon: '#59d0ff',
                hover: {
                    backgroundColor: '#00458b',
                    color: '#b6c8d9',
                },
                disabled: {
                    color: '#3e5e7e',
                },
            },
        },
    };

    const menuItemStyles = {
        root: {
            fontSize: '14px',
            fontWeight: 400,
        },
        icon: {
            color: themes[theme].menu.icon,
            '&:hover': {
                color: themes[theme].menu.hover.color,
            }
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
                    : 'transparent',
        }),
        button: {
            color: themes[theme].menu.menuContent,
            '&:hover': {
                backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
                color: themes[theme].menu.hover.color,
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };

    // const handleThemeChange = (e) => {
    //     dispatch(setActiveTheme(e.target.checked ? "dark" : "light"))
    // }

    const handleIconThemeChange = () => {
        dispatch(setActiveTheme(theme == "light" ? "dark" : "light"))
    }

    return (
        <Sidebar
            breakPoint="md"
            style={{ height: "100vh" }}
            collapsed={collapsed}
            toggled={isToggled}
            backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
            rootStyles={{
                color: themes[theme].sidebar.color,
            }}
        >
            <Menu iconShape="circle" menuItemStyles={menuItemStyles}>

                {isMobile ?
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                        <h2>Admin</h2>
                    </MenuItem>
                    :
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => setToggle(!isToggled)}
                    >Toggle Sidebar
                    </MenuItem>
                }

                {/* <MenuItem icon={theme == "light" ? <DarkModeIcon onClick={handleIconThemeChange} /> : <LightModeIcon onClick={handleIconThemeChange} />}><ThemeSwitch checked={theme == "dark" ? true : false} onChange={handleThemeChange} /></MenuItem> */}
                <MenuItem icon={theme == "light" ? <DarkModeIcon onClick={handleIconThemeChange} /> : <LightModeIcon onClick={handleIconThemeChange} />}></MenuItem>
                <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>Home</MenuItem>
                <MenuItem icon={<PeopleOutlinedIcon />} component={<Link to="/users" />}>Users</MenuItem>
                <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
                <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
                <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
            </Menu>
        </Sidebar>
    )
}
