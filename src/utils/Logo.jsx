import React from 'react'
import { Link } from 'react-router-dom'
import "./style/logo.style.scss"

const Logo = () => {
  return (
    <>
      <nav className="logo__wrapper">
        <Link to="/" className='logo__item'>Saintdom</Link>
      </nav>
    </>
  )
}

export default Logo