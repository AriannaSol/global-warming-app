import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageDatas from "./pages/PageDatas";
import { LightModeProvider } from "./context/LightModeContext";

function App() {
  return (
    <div className="App">
      <Router>
        <LightModeProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:pathName" element={<PageDatas />} />
          </Routes>
        </LightModeProvider>
      </Router>
    </div>
  );
}

export default App;
