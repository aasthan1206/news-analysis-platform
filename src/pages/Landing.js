import React from "react";
import graph1 from "../assets/images/graph1.png";
import graph5 from "../assets/images/graph5.png";
import graph7 from "../assets/images/graph7.png";
import graph8 from "../assets/images/graph8.jpg";
import sa2 from "../assets/images/sa2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import hindu from '../assets/images/hindu.png';
import ht1 from '../assets/images/ht1.png';
import tie from '../assets/images/tie.png';
import it from '../assets/images/it.png';
import ndtv from '../assets/images/ndtv.png';
import quint from '../assets/images/quint.png';
import toi from '../assets/images/toi.png';
import zee from '../assets/images/zee.svg';

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
]
const Landing = () => {
  return (
    <div className="bg-grey-dark border-y-[1px] border-primary p-16">
      <div className="bg-gradient-to-r from-white via-primary to-white rounded-xl p-12">
        <div className="text-5xl text-center font-merri font-bold text-grey-dark">
          News Platform
        </div>
        <div className="flex gap-8">
          {/* Two grey boxes */}
          <div className="pt-12">
            <div className="bg-grey-medium w-[300px] h-[300px] py-4 px-8 rounded-lg">
              <div className="text-white text-lg font-medium font-crimson pb-2">
                Australia vs Sri Lanka Live Score, Cricket World Cup 2023:
                Bottom placed Australia hope for change in fortune
              </div>
              <div className="text-white text-lg font-crimson font-semibold pb-1">
                Polarity: <br />
                0.054075695
              </div>
              <div className="text-white text-lg font-crimson font-semibold">
                Subjectivity: <br />
                0.497584541
              </div>
            </div>
            <div className="bg-grey-light w-[300px] h-[300px] -mt-32 ml-44 py-4 px-8 rounded-lg">
              <div className="text-lg font-medium font-crimson pb-2">
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
          {/* Right hand side quote */}
          <div className="py-32">
            <div className="text-3xl font-tiltneon font-semibold opacity-50">
              <span>Negative news is cheap to produce</span>
              <br />
              <span className="pl-24">Honest journalism is expensive</span>
            </div>
            <div className="pt-12 text-justify text-xl font-semibold font-crimson text-grey-dark">
              According to a survey conducted by New York University, "for a
              headline of average length, each additional negative word
              increased the click-through rate by 2.3%". "Headline Stress
              Disorder," first defined by psychologist Dr. Steven Stosny as a
              high emotional response to endless reports from the news media,
              such as feeling anxiety and stress. It's a psychological disorder
              caused by too much news coverage.
            </div>
          </div>
        </div>
        {/* GHAPHS */}
        <div>
          <div className="text-grey-medium italic font-semibold text-center text-3xl font-crimson py-8">
            Illustrations are the best way to understand trends.
          </div>
          <div className="flex gap-8">
            <img src={graph1} alt="graph1" className="w-1/2 rounded-lg" />
            <img src={graph5} alt="graph5" className="w-1/2 rounded-lg" />
          </div>
          <div className="py-8"></div>
          <div className="mx-32">
            <div className="flex justify-between">
              <div className="text-lg font-medium font-tiltneon italic pb-4 text-grey-dark w-1/2">
                It is vital to keep the readers informed about the polarity and
                subjectivity of the news read by them. Polarity refers to the
                emotional tone of a news article, i.e., positive, negative, or
                neutral. Subjectivity refers to the presence of personal
                feelings and opinions in the presentation of information.
                Sentiment analysis is the key to finding the polarity and
                subjectivity of any news article.
              </div>
              <div>
                <img src={graph7} alt="graph1" className="" />
              </div>
            </div>
            <div className="flex justify-between pt-8">
              <div>
                <img src={graph8} alt="graph5" className="" />
              </div>
              <div className="">
                <img src={sa2} alt="sentiment analysis" className="" />
              </div>
            </div>
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
                    <img src={item.image} alt="news source" className="w-[200px]"/>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Landing;
