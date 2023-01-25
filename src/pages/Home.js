import { useContext } from "react";
import Card from "../components/homeCards/Card";
import Navbar from "../components/navbar/Navbar";
import { LightModeContext } from "../context/LightModeContext";

function Home() {
  const { lightMode } = useContext(LightModeContext);
  const contentProvider = () => {
    return (
      <div className="home-container-div">
        <Navbar />
        <section className="home-section">
          <Card />
        </section>
      </div>
    );
  };
  return (
    <main
      className={
        lightMode ? "Container Container-light" : "Container Container-dark"
      }
    >
      {contentProvider()}
    </main>
  );
}
export default Home;
