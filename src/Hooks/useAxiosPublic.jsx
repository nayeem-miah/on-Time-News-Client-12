import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "  https://on-time-news-server-12.vercel.app",

  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
