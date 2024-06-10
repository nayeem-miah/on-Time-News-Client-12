import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllPublisherCard from "./AllPublisherCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const AllPublisher = () => {
  const axiosSecure = useAxiosSecure();
  const { data: publisher = [] } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosSecure.get("/publisher");
      return res.data;
    },
  });
  return (
    <div>
      <div className="md:w-4/12 mx-auto text-center my-8">
        <h4 className="text-3xl text-purple-500 my-6 text-center uppercase border-b-4 py-4">
          All Publisher
        </h4>
      </div>

      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper lg:mb-24"
        >
          <div className="">
            {publisher.map(publices => (
              <SwiperSlide key={publices._id}>
                <AllPublisherCard publices={publices}></AllPublisherCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default AllPublisher;
