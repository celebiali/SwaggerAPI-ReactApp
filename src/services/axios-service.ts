import { API_BASE } from "@/config/settings";
import axios from "axios";

const axiosConf = axios.create({ baseURL: API_BASE });

let countOfRequests = 0;

axiosConf.interceptors.request.use(
  (config) => {
    let userToken = localStorage.getItem("userToken");

    if (config.headers) {
      config.headers["Authorization"] = `Bearer ${userToken}`;
    }

    countOfRequests++;
    return config;
  },
  function (error) {
    countOfRequests--;
    console.log("REQ ERROR ", error);
    return Promise.reject(error);
  }
);

export default axiosConf;
