import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import LightMode from '../lightMode/LightMode'

function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center">
          <Link
            className="inline-block font-normal mr-2 text-xl no-underline text-gray-500 py-1 px-2"
            to="/"
          >
            <img
              className="h-12"
              src="../../images/green-earth.png"
              alt="earth logo"
            />
          </Link>
          <LightMode />
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  )
}
export default Navbar
