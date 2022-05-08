import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import {ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import 'react-pro-sidebar/dist/css/styles.css';

import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
} from "react-icons/fi";
import {
    FaJava,
    FaReact,
    FaTable
} from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { IoLogoJavascript } from 'react-icons/io';



const NavbarMain = () => {

    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    }

    //ADD PADDING TO THE NAV

    return (
        <>
            <section className="header">
                <ProSidebar collapsed={menuCollapse}>

                    {/*CONTAINS HEADER & RESPONSIVE LOGO*/}
                    <SidebarHeader>
                        <div className="logotext">
                            logo here
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? <FiArrowRightCircle /> :
                                <FiArrowLeftCircle />}
                        </div>

                        {/*CHANGE MENU ICON SHAPE*/}

                        <Menu >
                            <MenuItem active={true} icon={<FiHome />}>


                            </MenuItem>

                            {/* conditionally show the admin portal */}
                                <MenuItem icon={<RiAdminLine />}>
                                    <Link to="/admin">Admin Portal</Link>
                                </MenuItem>

                        </Menu>
                    </SidebarHeader>

                    {/*CONTAIN MAIN NAV CONTENT*/}

                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem icon={<FaJava/>}>
                                <Link to="/java">Java</Link>
                            </MenuItem>
                            <MenuItem icon={<FaReact/>}>
                                <Link to="/react">React</Link>
                            </MenuItem>
                            <MenuItem icon={<FaTable />}>
                                <Link to="/sql">SQL</Link>
                            </MenuItem>
                            <MenuItem icon={<IoLogoJavascript />}>
                                <Link to="/javascript">JavaScript</Link>
                            </MenuItem>

                        </Menu>
                    </SidebarContent>

                    {/*FOOTER SECTION*/}
                    <SidebarFooter>
                        <Menu iconShape="square">

                            <MenuItem icon={<BiCog/>}>
                                <Link to="/account">Account</Link>
                            </MenuItem>

                            <MenuItem icon={<FiLogOut/>}>
                                {/*<Link to="/" onClick={() => logout()}>Logout</Link>*/}
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </section>

        </>
    );
};

export default NavbarMain;
