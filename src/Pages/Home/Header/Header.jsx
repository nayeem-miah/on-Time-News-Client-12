import img1 from "../../../assets/TrandingNews/1.jpg";
import img2 from "../../../assets/TrandingNews/2.jpg";
import img3 from "../../../assets/TrandingNews/3.jpg";
import img4 from "../../../assets/TrandingNews/4.jpg";
import img5 from "../../../assets/TrandingNews/5.jpg";
import img6 from "../../../assets/TrandingNews/6.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Header = () => {
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
      <SwiperSlide>
        <div className="w-full my-10">
          <img className="w-full  lg:h-[700px] rounded" src={img1} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full my-10">
          <img className="w-full  lg:h-[700px] rounded" src={img2} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full my-10">
          <img className="w-full rounded lg:h-[700px]" src={img3} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full my-10">
          <img className="w-full  rounded lg:h-[700px]" src={img4} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full my-10">
          <img className="w-full  rounded lg:h-[700px]" src={img5} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full my-10">
          <img className="w-full  rounded lg:h-[700px]" src={img6} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
