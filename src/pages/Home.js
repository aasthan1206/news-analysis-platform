import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegBookmark } from "react-icons/fa6";

const NewsCategory = [
  {
    id: 1,
    title: `Top`,
  },
  {
    id: 2,
    title: `World`,
  },
  {
    id: 3,
    title: `Science`,
  },
  {
    id: 4,
    title: `Politics`,
  },
  {
    id: 5,
    title: `Entertainment`,
  },
  {
    id: 6,
    title: `Business`,
  },
];
const Home = () => {
  const [sentimentData, setSentimentData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const startTime = performance.now();

  // Function to fetch all sentiment analysis data
  const fetchAllSentiments = async () => {
    await axios
      .get("http://localhost:5000/get_all_sentiments")
      .then((response) => {
        setSentimentData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sentiment data:", error);
      });
  };

  useEffect(() => {
    fetchAllSentiments().then(() => {
      setIsDataLoaded(true);
    });
  }, []); // Empty dependency array means this effect runs once on component mount

  const endTime = performance.now();
  const responseTime = endTime - startTime;
  console.log(`Response time: ${responseTime} milliseconds`);
  // 0.10000000149011612 milliseconds

  return (
    <div className="">
      <div className="h-12 bg-grey-light text-grey-dark font-medium text-center flex justify-evenly items-center">
        {NewsCategory?.map((item) => (
          <div key={item.id} className="cursor-pointer hover:text-primary">
            {item.title}
          </div>
        ))}
      </div>
      {isDataLoaded ? (
        <div className="mx-16 my-8">
          <div className="flex gap-8">
            <div>
              {/* Left Column Horizontal, 3 news */}
              <div className="">
                {sentimentData?.slice(3, 6)?.map((article, index) => (
                  <div key={index}>
                    {article?.image_url != null && (
                      <div className="border-t-4 border-grey-light py-2 my-4 flex gap-8">
                        <div className="w-[600px]">
                          <img
                            src={article.image_url}
                            alt="news"
                            className=""
                          />
                        </div>

                        <div>
                          <div className="font-semibold text-xl">
                            {article.title}
                          </div>
                          <div className="py-2 text-grey-medium">
                            {article.description}...
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer text-grey-dark"
                            >
                              Read More
                            </a>
                          </div>
                          {sentimentData.length > 0 && (
                            <div className="flex text-red-500 font-semibold items-center justify-between">
                              <div className="flex gap-8">
                                <p>Polarity: {article?.Polarity}</p>
                                <p>Subjectivity: {article?.Subjectivity}</p>
                              </div>

                              <div className="self-center cursor-pointer mr-4">
                                <FaRegBookmark className="h-5 w-5 text-grey-dark" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* lEFT COLUMN, 4 NEWS ARTICLES IN GRID 2X2 */}
              <div className="my-4">
                <div className="flex gap-4">
                  {/* Row 1 Col 1 */}
                  <div className="py-2 my-4 w-1/2 border-r-[1px] border-grey-dark">
                    <div className="w-[400px]">
                      <img
                        src={sentimentData[7].image_url}
                        alt="news"
                        className=""
                      />
                    </div>

                    <div>
                      <div className="font-semibold text-xl">
                        {sentimentData[7].title}
                      </div>
                      <div className="py-2 text-grey-medium">
                        {sentimentData[7].content.substring(0, 50)}...
                        <a
                          href={sentimentData[7].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-grey-dark"
                        >
                          Read More
                        </a>
                      </div>
                      {sentimentData.length > 0 && (
                        <div className="flex text-red-500 font-semibold items-center justify-between">
                          <div className="flex gap-8">
                            <p>Polarity: {sentimentData[7]?.Polarity}</p>
                            <p>
                              Subjectivity: {sentimentData[7]?.Subjectivity}
                            </p>
                          </div>

                          <div className="self-center cursor-pointer mr-4">
                            <FaRegBookmark className="h-5 w-5 text-grey-dark" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 1 Col 2 */}
                  <div className="py-2 my-4 w-1/2 pl-4">
                    <div className="w-[400px]">
                      <img
                        src={sentimentData[8].image_url}
                        alt="news"
                        className=""
                      />
                    </div>

                    <div>
                      <div className="font-semibold text-xl">
                        {sentimentData[8].title}
                      </div>
                      <div className="py-2 text-grey-medium">
                        {sentimentData[8].content.substring(0, 50)}...
                        <a
                          href={sentimentData[8].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-grey-dark"
                        >
                          Read More
                        </a>
                      </div>
                      {sentimentData.length > 0 && (
                        <div className="flex text-red-500 font-semibold items-center justify-between">
                          <div className="flex gap-8">
                            <p>Polarity: {sentimentData[8]?.Polarity}</p>
                            <p>
                              Subjectivity: {sentimentData[8]?.Subjectivity}
                            </p>
                          </div>

                          <div className="self-center cursor-pointer mr-4">
                            <FaRegBookmark className="h-5 w-5 text-grey-dark" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="flex gap-4 border-t-[1px] border-grey-dark">
                  {/* Row 2 Col 1 */}
                  <div className="py-2 my-4 w-1/2 border-r-[1px] border-grey-dark">
                    <div className="w-[400px]">
                      <img
                        src={sentimentData[9].image_url}
                        alt="news"
                        className=""
                      />
                    </div>

                    <div>
                      <div className="font-semibold text-xl">
                        {sentimentData[9].title}
                      </div>
                      <div className="py-2 text-grey-medium">
                        {sentimentData[9].content.substring(0, 50)}...
                        <a
                          href={sentimentData[9].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-grey-dark"
                        >
                          Read More
                        </a>
                      </div>
                      {sentimentData.length > 0 && (
                        <div className="flex text-red-500 font-semibold items-center justify-between">
                          <div className="flex gap-8">
                            <p>Polarity: {sentimentData[9]?.Polarity}</p>
                            <p>
                              Subjectivity: {sentimentData[9]?.Subjectivity}
                            </p>
                          </div>

                          <div className="self-center cursor-pointer mr-4">
                            <FaRegBookmark className="h-5 w-5 text-grey-dark" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 2 Col 2 */}
                  <div className="py-2 my-4 w-1/2 pl-4">
                    <div className="w-[400px]">
                      <img
                        src={sentimentData[10].image_url}
                        alt="news"
                        className=""
                      />
                    </div>

                    <div>
                      <div className="font-semibold text-xl">
                        {sentimentData[10].title}
                      </div>
                      <div className="py-2 text-grey-medium">
                        {sentimentData[10].content.substring(0, 50)}...
                        <a
                          href={sentimentData[10].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-grey-dark"
                        >
                          Read More
                        </a>
                      </div>
                      {sentimentData.length > 0 && (
                        <div className="flex text-red-500 font-semibold items-center justify-between">
                          <div className="flex gap-8">
                            <p>Polarity: {sentimentData[10]?.Polarity}</p>
                            <p>
                              Subjectivity: {sentimentData[10]?.Subjectivity}
                            </p>
                          </div>

                          <div className="self-center cursor-pointer mr-4">
                            <FaRegBookmark className="h-5 w-5 text-grey-dark" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2, 2 NEWS ARTICLES VERTICALLY */}
            <div>
              {sentimentData?.slice(0, 3)?.map((article, index) => (
                <div
                  key={index}
                  className="border-l-[1px] border-grey-dark pl-8"
                >
                  {article.image_url != null && (
                    <div className="border-b-2 border-grey-light py-2 my-2">
                      <div>
                        <img
                          src={article.image_url}
                          alt="news"
                          className="w-[550px]"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-xl">
                          {article.title}
                        </div>
                        <div className="py-2 text-grey-medium">
                          {article.description} ...
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer text-grey-dark"
                          >
                            Read More
                          </a>
                        </div>
                        {sentimentData.length > 0 && (
                          <div className="text-red-500 text-sm font-semibold flex gap-4">
                            <div>
                              <p>Polarity: {article?.Polarity}</p>
                              <p>Subjectivity: {article?.Subjectivity}</p>
                            </div>

                            {/* <span className="cursor-pointer self-center">
                          <FaRegBookmark className="h-4 w-4 text-grey-dark" />
                        </span> */}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* BOTTOM */}
          <div className="grid grid-cols-3 gap-8 border-t-2 border-grey-light py-4">
            {sentimentData?.slice(20, 29)?.map((article, index) => (
              <div
                key={index}
                className="border-b-[1px] border-grey-light pb-2"
              >
                <div className="text-grey-medium">{article.source_id}</div>
                <div className="text-lg font-semibold">{article.title}</div>
                {sentimentData.length > 0 && (
                  <div className="text-red-500 pt-2 font-semibold flex gap-6">
                    <p>Polarity: {article?.Polarity}</p>
                    <p>Subjectivity: {article?.Subjectivity}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Home;
