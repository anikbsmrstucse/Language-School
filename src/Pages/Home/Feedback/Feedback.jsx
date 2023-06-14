import React from "react";
import SectionTitle from "../../../Component/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../../assets/testimonial/testimonial1.png";
import img2 from "../../../assets/testimonial/testimonial2.png";
import img3 from "../../../assets/testimonial/testimonial3.png";

const Feedback = () => {
  return (
    <div>
      <SectionTitle title={"What our learners says"}></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="md:mx-20">
          <SwiperSlide>
            <div className="md:flex  md:items-center md:justify-center">
              <div>
                <img className="w-6/6 mx-auto md:ml-20 mb-5" src={img1} alt="" />
              </div>
              <div className=" p-0 md:p-10 md:mx-10 mx-0 text-center space-y-3 mr-0 md:mr-10">
                <p className="text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque ipsam dolorem neque rem beatae labore dicta cupiditate
                  hic, sequi fuga rerum amet, corporis, aperiam blanditiis.
                  Nulla laborum consequuntur qui mollitia.
                </p>
                <h3 className="text-2xl font-bold text-primary">
                  Ivoniee Martine - USA
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:flex  md:items-center md:justify-center">
              <div>
                <img className="w-6/6 mx-auto md:ml-20 mb-5" src={img2} alt="" />
              </div>
              <div className=" p-0 md:p-10 md:mx-10 mx-0 text-center space-y-3 mr-0 md:mr-10">
                <p className="text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque ipsam dolorem neque rem beatae labore dicta cupiditate
                  hic, sequi fuga rerum amet, corporis, aperiam blanditiis.
                  Nulla laborum consequuntur qui mollitia.
                </p>
                <h3 className="text-2xl font-bold text-primary">
                  Ana Abbas - PKA
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:flex  md:items-center md:justify-center">
              <div>
                <img className="w-6/6 mx-auto md:ml-20 mb-5" src={img3} alt="" />
              </div>
              <div className=" p-0 md:p-10 md:mx-10 mx-0 text-center space-y-3 mr-0 md:mr-10">
                <p className="text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque ipsam dolorem neque rem beatae labore dicta cupiditate
                  hic, sequi fuga rerum amet, corporis, aperiam blanditiis.
                  Nulla laborum consequuntur qui mollitia.
                </p>
                <h3 className="text-2xl font-bold text-primary">
                  John Doe - USA
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Feedback;
