import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";
const Header = () => {
  const axiosPublic = useAxiosPublic();
  // const description =
  const { data: allArticles = [] } = useQuery({
    queryKey: ["allArticles"],
    queryFn: async () => {
      const res = axiosPublic.get("/articlesCount");
      return (await res).data;
    },
  });
  // console.log(allArticles);

  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      loop={true}
    >
      {allArticles.map(article => (
        <SwiperSlide key={article._id}>
          <div className="w-full my-10 mt-20 flex gap-3 bg-purple-200 rounded p-3">
            <img
              className="w-1/2 h-[170px] lg:h-[500px] rounded"
              src={article.image}
            />
            <div className="lg:my-auto">
              <div className="flex gap-5">
                <div className="flex items-center gap-2 text-center ">
                  <FaEye className="text-xl text-gray-500"></FaEye>
                  <p className="text-gray-500"> {article?.viewCount}</p>
                </div>
                <h3 className="text-xl lg:text-2xl text-center">
                  {article.title}
                </h3>
              </div>
              <p className="text-xs lg:my-5 lg:text-[14px]">
                {article.description.slice(0, 200)}
                <p className="text-blue-500 link">
                  #{article.tags}
                </p>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Header;
