import axios from "axios";

const baseUrl = "https://global-warming.org/api/";

const getAllDatas = async (setYear, setData, setLoading, query) => {
  setLoading(true);
  try {
    const resp = await axios.get(baseUrl + `${query}`);
    if (resp) {
      const data =
        resp.data.co2 ||
        resp.data.nitrous ||
        resp.data.methane ||
        resp.data.arcticData ||
        resp.data.result;
      const xAxisData = data.map((i) => i.year || i.date || i.time);
      const yAxisData = data.map(
        (i) => i.cycle || i.average || i.extent || i.station
      );
      setYear(xAxisData);
      setData(yAxisData);
      setLoading(false);
    }
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

export { getAllDatas };
