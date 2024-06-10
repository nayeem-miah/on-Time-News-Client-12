import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const Header = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  // const description =
  const { data: allArticles = [] } = useQuery({
    queryKey: ["allArticles"],
    queryFn: async () => {
      const res = axiosPublic.get("/articlesCount");
      return (await res).data;
    },
  });

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
          <div className="w-full my-10 mt-16 flex gap-3 bg-base-300 rounded ">
            <div
              className="hero min-h-[170px] h-[500px]"
              style={{
                backgroundImage: `url(${article.image})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                  <h1 className="mb-5 text-3xl font-bold">{article.title}</h1>
                  <p className="text-xs w-full lg:my-5 lg:text-[14px]">
                    {article.description.slice(0, 200)}
                    <p className="text-blue-500 link">#{article.tags}</p>
                  </p>
                  <Link to={!user ? "/" : "/allArticles"}>
                    <button className="btn btn-outline btn-success border-0 border-b-2 border-t-2 mt-4">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Header;
