import React, { useRef, useState } from 'react'

import * as CSS from './Header.styled'
import { Links } from '../Links/Links'
import { Logo, Menu, Close } from '../../assets/icons'
import useOutsideClick from '../../hooks/useOutsideClick'

const Header = () => {
  const containerRef = useRef(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(current => !current)
  }

  useOutsideClick(containerRef, (ref: any) => {
    ref.target.id !== 'nav-link' && setShowMobileMenu(false)
  })

  return (
    <CSS.Container>
      <CSS.Content>
        <a href="/frontend">
          <CSS.LogoContainer>
            <Logo />
          </CSS.LogoContainer>
        </a>
        <CSS.Navbar>
          <CSS.Navigator>
            <Links />
          </CSS.Navigator>
        </CSS.Navbar>

        <CSS.NavbarMobile>
          <div id="menu-icon" ref={containerRef} onClick={toggleMobileMenu}>
            {showMobileMenu ? <Close color="red" /> : <Menu />}
          </div>
          <CSS.NavigatorMobile>
            {showMobileMenu && <Links />}
          </CSS.NavigatorMobile>
        </CSS.NavbarMobile>
      </CSS.Content>
    </CSS.Container>
  )
}

export { Header }
