import axios from "axios";

export const fetchData = async (url) => {
  let result = await axios(url);
  return result;
};

let FetchService = { fetchData };
export default FetchService;
