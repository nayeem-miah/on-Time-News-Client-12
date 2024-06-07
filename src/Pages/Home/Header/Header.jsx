import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const Header = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allArticles = [] } = useQuery({
    queryKey: ["allArticles"],
    queryFn: async () => {
      const res = axiosPublic.get("/articlesCount");
      return (await res).data;
    },
  });
  console.log(allArticles);
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
          <div className="w-full my-10">
            <img className="w-full  lg:h-[700px] rounded" src={article.image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Header;
