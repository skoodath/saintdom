
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.scss'
import Logo from './utils/Logo'
import Menu from './utils/Menu'
import { MdMenu } from 'react-icons/md'

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="App">
      <header className='app__header'>
        <div className='app__wrapper'>
          <Logo />
          <nav className='app__menu_btn_small' onClick={handleMenu}>
            <MdMenu />
          </nav>
          <Menu showMenu={showMenu} handleMenu={handleMenu} />
        </div>
      </header>
        <Outlet />
    </div>
  )
}

export default App
