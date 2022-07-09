import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style/menu.style.scss"
import { getMenu } from '../data/menu'
import { MdClose } from 'react-icons/md'  

const Menu = () => {
  let menus = getMenu()
  return (
    <>
      <nav className="navbar__main">
          <span className='close__btn_wrapper'>
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