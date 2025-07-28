import React from 'react'
import { Input } from '../input'
import { Button } from '../button'
import './Header.css'


const Header = () => {
  return (
    <header className="header">
      {/* Left - Page title or Logo */}
      <h1 className="header__title">Dashboard</h1>

      {/* Center - Search */}
      <div className="header__search-wrapper">
        <Input
          placeholder="Search..."
          type="text"
          className="header__search-input"
        />
      </div>

      {/* Right - Language Switcher */}
      <div className="header__lang-switcher">
        <Button variant="outline" size="sm" className="header__lang-button">
          EN
        </Button>
        <Button variant="outline" size="sm" className="header__lang-button">
          AR
        </Button>
      </div>
    </header>
  )
}

export default Header;
