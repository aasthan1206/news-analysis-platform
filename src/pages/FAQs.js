import React, { useState, useEffect } from "react";
import faqV2 from "../assets/images/faqV2.png";
import qm1 from "../assets/images/qm1.png"
import cx from "classnames";
import { BiSolidDownArrow } from "react-icons/bi";
import { Navigate } from "react-router-dom";

const FaqData = [
  {
    id: 1,
    question: "What is sentiment analysis, and how does it enhance my news reading experience?",
    answer:
      "Sentiment analysis examines emotional tones in text, enhancing understanding of news articles. It reveals emotional context, aiding in comprehensive news interpretation.",
  },
  {
    id: 2,
    question: "How does the platform categorize the polarity of news articles as positive, negative, or neutral?",
    answer:
      "The platform utilizes advanced sentiment analysis algorithms to categorize articles based on emotional tone, identifying sentiments as positive, negative, or neutral.",
  },
  {
    id: 3,
    question: "What are the criteria used for selecting and displaying news articles on the platform?",
    answer:
      "We select and display articles based on relevance, credibility, and diversity. Our aim is to provide a comprehensive and balanced coverage of various news topics.",
  },
  {
    id: 4,
    question: "How can I create an account, and what are the benefits of having one?",
    answer:
      "Creating an account is simple and offers benefits such as article saving, personalized news, and access to exclusive features, enhancing your overall news experience.",
  },
  {
    id: 5,
    question: "How frequently is the news feed updated with the latest articles from various sources?",
    answer:
      "Our news feed is regularly updated in real-time, ensuring a constant flow of the latest articles from diverse and reputable sources worldwide, keeping you informed.",
  },
];

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quesId, setQuesId] = useState(0);
  
  return (
    // bg-gradient-to-r from-primary to-grey-light
    <div>
      {/* {authenticated && ( */}
      <div className="">
        <div className="bg-grey-dark flex justify-evenly">
          <img src={qm1} alt="faq" className="w-1/3" />
          <div className="text-grey-light text-6xl self-center font-merri font-bold">Got Some Questions</div>
        </div>
        <div className="mb-12">
          {FaqData?.map((item) => (
            <div
              key={item.id}
              className="border-[1px] border-grey-medium shadow-md shadow-grey-dark rounded-md px-3 py-2 w-[600px] mx-auto my-6 cursor-pointer select-none"
            >
              <div
                onClick={() => {
                  setQuesId(item.id);
                  // setIsOpen(!isOpen);
                }}
                className="text-grey-dark text-xl font-semibold flex justify-between"
              >
                {item.question}{" "}
                <span>
                  <BiSolidDownArrow />
                </span>
              </div>
              {/* {isOpen && ( */}
              <div
                className={cx("hidden py-2 text-grey-medium font-semibold", {
                  "!block": item.id === quesId,
                })}
              >
                {item.answer}
              </div>
              {/* )} */}
            </div>
          ))}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default FAQs;
