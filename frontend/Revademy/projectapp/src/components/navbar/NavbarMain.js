import React, {Fragment, useState} from 'react';
import {Link, Route} from "react-router-dom";
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Activities from "../games/Activities";
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";



const NavbarMain = () => {

    const [menuCollaspe, setMenuCollapse] = useState(false);

    const menuIconClick = () => {
        menuCollaspe ? setMenuCollapse(false) : setMenuCollapse(true);
    }

    return (
        <>
            <ProSidebar collapsed={menuCollaspe}>
                <SidebarHeader>
                    <div className="">
                        Logo Here
                    </div>
                    <div
                        className="closeMenu"
                        onClick={menuIconClick}
                    >
                        {menuCollaspe ?
                            <FiArrowLeftCircle/>
                            :
                            <FiArrowRightCircle/>
                        }
                    </div>
                    <Menu>
                        <MenuItem>
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </MenuItem>
                    </Menu>
                </SidebarHeader>

                <SidebarContent>
                    <Menu>
                        <MenuItem>
                            <Link to="/activites">Activities</Link>
                            <Link to="/events">Events</Link>
                        </MenuItem>
                    </Menu>
                </SidebarContent>

                <SidebarFooter>

                </SidebarFooter>

            </ProSidebar>

        </>
    );
};

export default NavbarMain;
