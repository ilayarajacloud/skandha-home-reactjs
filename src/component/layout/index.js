import React from 'react'
import Header from './header';
import SideNav from './sideNav';

const Layout = () => {
  return (
    <div data-theme="light" className="font-nunito">
      <div id="wrapper" className="theme-cyan">
        <Header />
        <SideNav />
      </div>
    </div>
  )
}

export default Layout