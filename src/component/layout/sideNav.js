import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Profile from "../../assets/images/profile.png";
import MenuItem from './menuItem';
const SideNav = () => {
    return (
        <div id="left-sidebar" className="sidebar">
            <button type="button" className="btn-toggle-offcanvas">
                <i className="fa fa-arrow-left" />
            </button>
            <div className="sidebar-scroll">
                <div className="user-account">
                    <img
                        src={Profile}
                        className="rounded-circle user-photo"
                        alt="User Profile Picture"
                    />
                    <div className="dropdown">
                        <span>Welcome,</span>
                        <a
                            href="javascript:void(0);"
                            className="dropdown-toggle user-name"
                            data-toggle="dropdown"
                        >
                            <strong>Jaya Surya</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right account">
                            <li>
                                <a href="page-profile2.html">
                                    <i className="icon-user" />
                                    My Profile
                                </a>
                            </li>
                            <li>
                                <a href="app-inbox.html">
                                    <i className="icon-envelope-open" />
                                    Messages
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <i className="icon-settings" />
                                    Settings
                                </a>
                            </li>
                            <li className="divider" />
                            <li>
                                <a href="../page-login.html">
                                    <i className="icon-power" />
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr />
                </div>
                {/* Tab panes */}
                <div className="tab-content padding-0">
                    <div className="tab-pane active" id="menu">
                        <nav id="left-sidebar-nav" className="sidebar-nav">
                            <ul id="main-menu" className="metismenu li_animation_delay">
                                <li>
                                    <NavLink to='/dashboard'>
                                        <i className="fa fa-dashboard" />
                                        <span>Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/overview">
                                        <i className="fa fa-eye" />
                                        <span>Overview</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <MenuItem subMenu={[
                                        { id: 1, label: 'New Lead', link: '/newlead' },
                                        { id: 2, label: 'Managed Lead', link: '/leadlist' },
                                        { id: 3, label: 'Dead Lead List', link: '/deadlead' },
                                        { id: 4, label: 'Lead Source', link: '/leadsource' },
                                        { id: 5, label: 'Lead Status', link: '/LeadStatus' },
                                    ]} title="Lead" />
                                </li>

                                <li>
                                    <MenuItem subMenu={[
                                        { id: 1, label: 'New Property', link: '/newproperty' },
                                        { id: 2, label: 'List Property', link: '/propertylist' },
                                        { id: 3, label: 'Property Location', link: '/propertylocation' },
                                        { id: 3, label: 'Add Property Plot Facing', link: '/plotfacing' },
                                    ]} title="Property" />
                                </li>
                                <li>
                                    <MenuItem subMenu={[
                                        { id: 1, label: 'New Customer', link: '/newcustomer' },
                                        { id: 1, label: 'Customer List', link: '/customerlist' },
                                    ]} title="Customer" />

                                </li>
                                <li>
                                    <MenuItem subMenu={[
                                        { id: 1, label: 'New Employee', link: '/newemployee' },
                                        { id: 2, label: 'List Employee', link: '/employee' },
                                        { id: 3, label: 'Employee Role', link: '/emplyeerole' },
                                    ]} title="Employees" />
                                </li>
                                <li>
                                    <MenuItem subMenu={[
                                        { id: 1, label: 'Assign Lead', link: './assignlead' },
                                        { id: 1, label: 'Assign List', link: './assignlist' },
                                    ]} title="Assign" />
                                </li>
                                {/* <li>
                                    <a href="#Master" className="has-arrow">
                                        <i className="fa fa-building-o" />
                                        <span>Master</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="../master/employeerole.html">Employee Role</a>
                                        </li>
                                        <li>
                                            <a href="../master/leadthrough.html">LeadThrough</a>
                                        </li>
                                        <li>
                                            <a href="../master/property-category.html">Category</a>
                                        </li>
                                        <li>
                                            <a href="../master/property-status.html">Status</a>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SideNav