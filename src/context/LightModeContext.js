import React, { createContext, useState } from "react";

const LightModeContext = createContext();

function LightModeProvider(props) {
  const [lightMode, setLightMode] = useState(false);
  const toggleLightMode = (light) => {
    setLightMode(!lightMode);
  };
  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
      {props.children}
    </LightModeContext.Provider>
  );
}

export { LightModeContext, LightModeProvider };
