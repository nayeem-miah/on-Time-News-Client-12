import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://on-time-news-server-12.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
