import { useParams, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { ClipLoader } from "react-spinners";
import Chart from "../components/charts/Chart";
import Navbar from "../components/navbar/Navbar";
import { LightModeContext } from "../context/LightModeContext";
import cx from "classnames";

function PageData() {
  const { pathName } = useParams();

  const { lightMode } = useContext(LightModeContext);
  const [chartData, title, desc] = useLoaderData();

  const respData =
    chartData.co2 ||
    chartData.nitrous ||
    chartData.methane ||
    chartData.arcticData ||
    chartData.result;

  const containerClass = cx({
    Container: true,
    lightmode: lightMode,
  });

  const xAxisData = respData.map((i) => i.year || i.date || i.time);
  const yAxisData = respData.map(
    (i) => i.cycle || i.average || i.extent || i.station
  );

  const chartDatas = xAxisData.map((stringaAnno, indice) => {
    return {
      name: stringaAnno,
      value: yAxisData[indice],
    };
  });

  return (
    <div className={containerClass}>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-h1-white py-16 text-center text-3xl font-bold">
            {title}
          </h1>
        </div>
        <div className="py-0 px-10">{desc}</div>
        <div className="relative w-full h-screen xs:h-64">
          <div className="absolute top-0 left-8 right-8 bottom-8 xs:right-0 xs:left-0">
            <Chart chartDatas={chartDatas} pathName={pathName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageData;
