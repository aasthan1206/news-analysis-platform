import React, { useState } from "react";
import faqV2 from "../assets/images/faqV2.png";
import cx from "classnames";
import {BiSolidDownArrow} from "react-icons/bi"

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quesId, setQuesId] = useState(0);
  const FaqData = [
    {
      id: 1,
      question: "Question",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iure, magnam deleniti harum quasi corporis aliquid error quia repudiandae officiis maxime, hic dolorum rerum fuga sapiente sint natus sequi. Temporibus?",
    },
    {
      id: 2,
      question: "Question",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iure, magnam deleniti harum quasi corporis aliquid error quia repudiandae officiis maxime, hic dolorum rerum fuga sapiente sint natus sequi. Temporibus?",
    },
    {
      id: 3,
      question: "Question",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iure, magnam deleniti harum quasi corporis aliquid error quia repudiandae officiis maxime, hic dolorum rerum fuga sapiente sint natus sequi. Temporibus?",
    },
    {
      id: 4,
      question: "Question",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iure, magnam deleniti harum quasi corporis aliquid error quia repudiandae officiis maxime, hic dolorum rerum fuga sapiente sint natus sequi. Temporibus?",
    },
    {
      id: 5,
      question: "Question",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iure, magnam deleniti harum quasi corporis aliquid error quia repudiandae officiis maxime, hic dolorum rerum fuga sapiente sint natus sequi. Temporibus?",
    },
  ];
  return (
    // bg-gradient-to-r from-primary to-grey-light
    <div className="">
      <div className="">
        <img src={faqV2} alt="faq" className="w-1/3 mx-auto" />
      </div>
      <div className="-mt-24 mb-12">
        {FaqData?.map((item) => (
          <div key={item.id} className="border-[1px] border-grey-medium shadow-md shadow-grey-dark rounded-md px-3 py-2 w-[600px] mx-auto my-6 cursor-pointer select-none">
            <div
              onClick={() => {
                setQuesId(item.id);
                // setIsOpen(!isOpen);
              }}
              className="text-grey-dark text-xl font-semibold flex justify-between"
            >
              {item.question} <span><BiSolidDownArrow /></span>
            </div>
            {/* {isOpen && */}
            <div className={cx('hidden py-2 text-grey-medium font-semibold', {'!block': item.id === quesId})}>{item.answer}</div>
            {/* } */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
