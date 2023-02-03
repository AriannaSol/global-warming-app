import axios from "axios";

const handleFetch = axios.create({
  baseURL: "https://global-warming.org/api/",
});

export const clientApi = async (url) => {
  const response = await handleFetch.get(url);
  return response.data;
};

export default clientApi;
