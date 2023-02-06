import { Container } from './style'
import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PzzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as IcecreamIcon } from '../../assets/ice-cream.svg'


import menuImg from '../../assets/menu.svg'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrir e fechar o menu' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/' >
              <BurgerIcon />
              <span>Hambúrgueres</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/pizzas' >
              <PzzaIcon />
              <span>Pizza</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/drinks'   >
              <SodaPopIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/ice-creams' >
              <IcecreamIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
