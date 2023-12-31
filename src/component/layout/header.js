import React from 'react';


const Header = () => {
    return (
        <nav className="navbar navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <button type="button" className="btn-toggle-offcanvas">
                        <i className="fa fa-bars" />
                    </button>
                    <button type="button" className="btn-toggle-fullwidth">
                        <i className="fa fa-bars" />
                    </button>
                    <a href="../index.html">Skandha Home</a>
                </div>
                <div className="navbar-right">

                    <div id="navbar-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a
                                    href="javascript:void(0);"
                                    className="dropdown-toggle icon-menu"
                                    data-toggle="dropdown"
                                >
                                    <i className="fa fa-bell" />
                                    <span className="notification-dot" />
                                </a>
                                <ul className="dropdown-menu notifications">
                                    <li className="header">
                                        <strong>You have 4 new Notifications</strong>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="icon-info text-warning" />
                                                </div>
                                                <div className="media-body">
                                                    <p className="text">
                                                        Campaign <strong>Holiday Sale</strong> is nearly
                                                        reach budget limit.
                                                    </p>
                                                    <span className="timestamp">10:00 AM Today</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="icon-like text-success" />
                                                </div>
                                                <div className="media-body">
                                                    <p className="text">
                                                        Your New Campaign <strong>Holiday Sale</strong> is
                                                        approved.
                                                    </p>
                                                    <span className="timestamp">11:30 AM Today</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="icon-pie-chart text-info" />
                                                </div>
                                                <div className="media-body">
                                                    <p className="text">
                                                        Website visits from Twitter is 27% higher than last
                                                        week.
                                                    </p>
                                                    <span className="timestamp">04:00 PM Today</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="icon-info text-danger" />
                                                </div>
                                                <div className="media-body">
                                                    <p className="text">
                                                        Error on website analytics configurations
                                                    </p>
                                                    <span className="timestamp">Yesterday</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="footer">
                                        <a href="javascript:void(0);" className="more">
                                            See all notifications
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="../page-login.html" className="icon-menu">
                                    <i className="fa fa-power-off" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;