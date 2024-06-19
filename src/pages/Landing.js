import React from "react";
import graph1 from "../assets/images/graph1.png";
import graph5 from "../assets/images/graph5.png";
import graph7 from "../assets/images/graph7.png";
import graph8 from "../assets/images/graph8.jpg";
import sa2 from "../assets/images/sa2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import hindu from "../assets/images/hindu.png";
import ht1 from "../assets/images/ht1.png";
import tie from "../assets/images/tie.png";
import it from "../assets/images/it.png";
import ndtv from "../assets/images/ndtv.png";
import quint from "../assets/images/quint.png";
import toi from "../assets/images/toi.png";
import zee from "../assets/images/zee.svg";

import "swiper/css";
// import "./styles.css"

const pressData = [
  {
    id: 2,
    image: hindu,
  },
  {
    id: 3,
    image: ht1,
  },
  {
    id: 4,
    image: tie,
  },
  {
    id: 5,
    image: it,
  },
  {
    id: 6,
    image: ndtv,
  },
  {
    id: 7,
    image: quint,
  },
  {
    id: 8,
    image: toi,
  },
  {
    id: 9,
    image: zee,
  },
];
const Landing = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className=" bg-hero bg-cover h-screen bg-black relative">
        <div className="h-screen absolute bg-opacity-50">
        <div className="text-5xl text-center font-merri font-bold text-grey-light py-8">
          Welcome to <span className="text-red-dark"> News Platform </span> -
          Your Gateway to Informed News Consumption
        </div>
        <div className="px-24 text-lg opacity-80 text-grey-light">
          In a world inundated with information, understanding the true essence
          of news often remains obscured. We are dedicated to redefining the way
          you engage with news. Our innovative web-based platform goes beyond
          delivering the latest headlines, providing you with a profound
          understanding of the emotional context that underlies each news
          article.
        </div>
        <div className="flex px-24 pt-40 gap-44 justify-between">
          <div className="w-1/3 bg-grey-medium bg-opacity-90 px-8 py-4">
            <div className="text-center text-lg font-bold text-grey-light">
              POLARITY
            </div>
            <div className="text-justify text-grey-light font-crimson">
              In the realm of sentiment analysis, polarity refers to the
              emotional tone conveyed by a piece of text. It categorizes the
              sentiment as either positive, negative, or neutral.
            </div>
          </div>
          <div className="w-1/3 bg-grey-medium bg-opacity-90 px-8 py-4">
            <div className="text-center text-lg font-bold text-grey-light">
              SUBJECTIVITY
            </div>
            <div className="text-justify text-grey-light font-crimson">
              In the realm of sentiment analysis, polarity refers to the
              emotional tone conveyed by a piece of text. It categorizes the
              sentiment as either positive, negative, or neutral.
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="mx-12">
        {/* Section 2 */}
        <div className="flex">
          {/* neg news left div */}
          <div className="bg-negNews bg-cover text-4xl font-merri italic font-bold text-red-light text-center w-2/3 h-[600px] mt-12 leading-relaxed tracking-wider relative">
            {/* <div className="h-[600px] absolute bg-opacity-50 bg-grey-light"> */}
           <div className="bg-opacity-80 bg-grey-light mt-52 px-12"> Negative news can feed our fears, making it vital to consume it
            mindfully.</div>
          {/* </div> */}
          </div>
          {/* Two grey boxes */}
          <div className="pt-12 w-1/3">
            <div className="h-[300px] relative  bg-eg1 bg-cover text-center">
              <div className="h-[300px] absolute bg-opacity-50 bg-grey-medium">
              <div className="text-grey-light py-4 px-8 text-lg font-crimson pb-2 font-semibold">
                Australia vs Sri Lanka Live Score, Cricket World Cup 2023:
                Bottom placed Australia hope for change in fortune
              </div>
              <div className="text-grey-light text-lg font-crimson font-semibold pb-1 ">
                Polarity: <br />
                0.054075695
              </div>
              <div className="text-grey-light text-lg font-crimson font-semibold">
                Subjectivity: <br />
                0.497584541
              </div>
              </div>
            </div>
            <div className="h-[300px] relative bg-eg2 bg-cover text-center text-grey-light">
            <div className="h-[300px] absolute bg-opacity-50 bg-grey-medium">
              <div className=" text-lg py-4 px-8 font-semibold font-crimson pb-2">
                IITK launches new cohorts of its one-of-a-kind eMasters degrees,
                GATE score not required to apply
              </div>
              <div className="text-lg font-crimson font-semibold pb-1">
                Polarity: <br />
                0.0.244214876
              </div>
              <div className="text-lg font-crimson font-semibold">
                Subjectivity: <br />
                0.441322314
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* GHAPHS */}
        <div>
          <div className="text-grey-medium font-semibold text-center text-4xl font-crimson pt-16">
            Illustrations are the best way to understand trends.
          </div>
          <div className="flex justify-between pt-16">
            <div>
              <img src={graph8} alt="graph5" className="" />
            </div>
            <div className="">
              <img src={sa2} alt="sentiment analysis" className="" />
            </div>
            <div>
              <img src={graph7} alt="graph1" className="" />
            </div>
          </div>
          <div className="flex gap-8 pt-8">
            <img src={graph1} alt="graph1" className="w-1/2 rounded-lg" />
            <img src={graph5} alt="graph5" className="w-1/2 rounded-lg" />
          </div>
        </div>

        {/* Press Coverage */}
        <div className="py-12">
          <div className="text-4xl text-center text-grey-medium font-merri font-bold pb-8">
            Our Press Coverage
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
          >
            {pressData?.map((item) => (
              <SwiperSlide key={item.id} className="">
                <img src={item.image} alt="news source" className="w-[200px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Landing;
