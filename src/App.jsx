
import { Outlet } from 'react-router-dom'
import './App.scss'
import Logo from './utils/Logo'
import Menu from './utils/Menu'

function App() {

  return (
    <div className="App">
      <header className='app__header'>
        <div className='app__wrapper'>
          <Logo />
          <Menu />
        </div>
      </header>
        <Outlet />
    </div>
  )
}

export default App
