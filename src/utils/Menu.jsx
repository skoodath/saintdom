import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style/menu.style.scss"
import { getMenu } from '../data/menu'

const activeStyle = {
  color: "red",
  borderBottom: "1px solid red"
}

const Menu = () => {
  let menus = getMenu()
  return (
    <>
      <nav className="navbar__main">
          {menus.map(menu => (
           <NavLink
           key={menu.id}
            to={menu.path} 
            className="nav__items"
            style={({isActive}) => { 
              return {
                backgroundColor: isActive ? "#1BEFC8": "#ffffff",
                boxShadow: isActive ? "box-shadow: 2px 2px 5px rgba(0,0,0,0.25)" : ""
              }}}
            >
            {menu.title}
            </NavLink>  
          ))}
        </nav>
    </>
  )
}

export default Menu