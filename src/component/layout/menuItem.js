import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const MenuItem = ({subMenu, title}) => {
  const [showSubMenue, setShowSubMenu] = useState(false);

  const handleClickMenue = () => {
    setShowSubMenu(!showSubMenue);
  }

  return (
    <>
      <a href="#Leads" className="has-arrow" aria-expanded={showSubMenue} onClick={handleClickMenue}>
        <i className="fa fa-user-circle-o" />
        <span>{title}</span>
      </a>
      {
        showSubMenue && (
          <ul>
            {subMenu.map(item=>(
              <li key={item.id}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        )
      }

    </>)
}

export default MenuItem;