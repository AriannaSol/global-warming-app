import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './hamburgerMenu.css'
import Hamburger from 'hamburger-react'
import { LightModeContext } from '../../context/LightModeContext'
import cx from 'classnames'

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const { lightMode } = useContext(LightModeContext)

  const menuClass = cx({
    menu: true,
    close: !isOpen,
  })
  const navPagesClass = cx({
    navpages: true,
    light: !lightMode,
  })

  return (
    <div>
      <Hamburger
        toggled={isOpen}
        toggle={() => setOpen(!isOpen)}
        color={lightMode ? '#201f1f' : '#efefef'}
      />
      <div className={menuClass}>
        <Link className={navPagesClass} to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link
          className={navPagesClass}
          to="/temperature"
          onClick={() => setOpen(false)}
        >
          Temperatures
        </Link>
        <Link
          className={navPagesClass}
          to="/co2"
          onClick={() => setOpen(false)}
        >
          CO2
        </Link>
        <Link
          className={navPagesClass}
          to="/methane"
          onClick={() => setOpen(false)}
        >
          Methane
        </Link>
        <Link
          className={navPagesClass}
          to="/nitrous-oxide"
          onClick={() => setOpen(false)}
        >
          NO2
        </Link>
        <Link
          className={navPagesClass}
          to="/arctic"
          onClick={() => setOpen(false)}
        >
          Polar Ice
        </Link>
      </div>
    </div>
  )
}
export default HamburgerMenu
