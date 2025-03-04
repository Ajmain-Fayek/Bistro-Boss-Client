import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// import images
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <>
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"order online"}
            />
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} />
                    <h3 className="text-4xl font-Cinzel -mt-16">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} />
                    <h3 className="text-4xl font-Cinzel -mt-16">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} />
                    <h3 className="text-4xl font-Cinzel -mt-16">Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} />
                    <h3 className="text-4xl font-Cinzel -mt-16">Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} />
                    <h3 className="text-4xl font-Cinzel -mt-16">Salad</h3>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;
