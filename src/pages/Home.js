import { useContext } from "react";
import Card from "../components/homeCards/Card";
import Navbar from "../components/navbar/Navbar";
import { LightModeContext } from "../context/LightModeContext";
import cx from "classnames";
function Home() {
  const { lightMode } = useContext(LightModeContext);
  const containerClass = cx({
    Container: true,
    lightmode: lightMode,
  });
  const contentProvider = () => {
    return (
      <div className="h-screen overflow-auto">
        <Navbar />
        <section className="py-8 px-0">
          <Card />
        </section>
      </div>
    );
  };
  return <main className={containerClass}>{contentProvider()}</main>;
}
export default Home;
