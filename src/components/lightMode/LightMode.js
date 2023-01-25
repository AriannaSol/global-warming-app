import React from "react";
import { useContext } from "react";
import { LightModeContext } from "../../context/LightModeContext";

function LightMode() {
  const { lightMode, toggleLightMode } = useContext(LightModeContext);
  function handleClick() {
    toggleLightMode();
  }
  return (
    <div className="lightswitch-container">
      <img
        src={
          lightMode
            ? "../../images/dark-mode.png"
            : "../../images/light-mode.png"
        }
        alt="lightswitch"
        onClick={handleClick}
        className="lightswitch"
      />
    </div>
  );
}
export default LightMode;
