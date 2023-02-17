import React from 'react'
import { useContext } from 'react'
import { LightModeContext } from '../../context/LightModeContext'

function LightMode() {
  const { lightMode, toggleLightMode } = useContext(LightModeContext)
  function handleClick() {
    toggleLightMode()
  }
  return (
    <div>
      <img
        src={
          lightMode
            ? '../../images/dark-mode.png'
            : '../../images/light-mode.png'
        }
        alt="lightswitch"
        onClick={handleClick}
      />
    </div>
  )
}
export default LightMode
