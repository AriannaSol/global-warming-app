import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ClipLoader } from "react-spinners";
import { getAllDatas } from "../services/clientApi";
import cardMenu from "../data";
import Chart from "../components/charts/Chart";
import Navbar from "../components/navbar/Navbar";
import Error from "../components/error/Error";
import { LightModeContext } from "../context/LightModeContext";

function PageData() {
  const { pathName } = useParams();
  const [data, setData] = useState([]);
  const [year, setYear] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [pageInfo, setPageInfo] = useState();

  const { lightMode } = useContext(LightModeContext);
  const contentProvider = () => {
    return (
      <div>
        <Navbar />
        <div className="page-container">
          <div className="title-container">
            <h1>{pageInfo.title}</h1>
          </div>
          <div className="desc-div">{pageInfo.desc}</div>
          <div className="container">
            <div className="chart-container">
              <Chart chartDatas={chartDatas} pathName={pathName} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (query !== "") {
      getAllDatas(setYear, setData, setLoading, query);
    }
  }, [query]);

  const chartDatas = year.map((stringaAnno, indice) => {
    return {
      name: stringaAnno,
      value: data[indice],
    };
  });

  useEffect(() => {
    setQuery(pathName + "-api");
    if (pathName === "temperature") {
      const info = cardMenu.find((i) => i.id === 1);
      setPageInfo(info);
    }

    if (pathName === "co2") {
      const info = cardMenu.find((i) => i.id === 2);
      setPageInfo(info);
    }

    if (pathName === "nitrous-oxide") {
      const info = cardMenu.find((i) => i.id === 3);
      setPageInfo(info);
    }

    if (pathName === "methane") {
      const info = cardMenu.find((i) => i.id === 4);
      setPageInfo(info);
    }

    if (pathName === "arctic") {
      const info = cardMenu.find((i) => i.id === 5);
      setPageInfo(info);
    }
  }, [pathName, chartDatas]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader size={150} color={"white"} />
      </div>
    );
  }
  if (chartDatas.length < 1) {
    return <Error />;
  }

  if (pageInfo) {
    return (
      <div
        className={
          lightMode ? "Container Container-light" : "Container Container-dark"
        }
      >
        {contentProvider()}
      </div>
    );
  }
}

export default PageData;
