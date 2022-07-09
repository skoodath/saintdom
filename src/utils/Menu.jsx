import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style/menu.style.scss"
import { getMenu } from '../data/menu'
import { MdClose } from 'react-icons/md'  

const Menu = ({showMenu, handleMenu }) => {
  let menus = getMenu()
  return (
    <>
      <nav className={showMenu ? "navbar__main show" : "navbar__main hide"}>
          <span className="close__btn_wrapper" onClick={handleMenu} >
            <MdClose />
          </span>
          {menus.map(menu => (
           <NavLink
           key={menu.id}
            to={menu.path} 
            className="nav__items"
            >
            {menu.title}
            </NavLink>  
          ))}
        </nav>
    </>
  )
}

export default Menu