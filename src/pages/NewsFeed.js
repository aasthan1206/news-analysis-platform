import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [sentimentData, setSentimentData] = useState([]);
  const apiKey = "pub_30840cab9d35de88ec283c01986db6eab4a4f"; // Replace with your News API key

  // Function to fetch all sentiment analysis data
  const fetchAllSentiments = async() => {
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
    // Define the API endpoint
    // const apiUrl = `https://newsdata.io/api/1/news?apikey=pub_30840cab9d35de88ec283c01986db6eab4a4f&country=in&language=en&page=1696833164160801508`;

    // Make the API call
    // fetchNews(apiUrl);
    fetchAllSentiments();
  }, [newsData]); // Empty dependency array means this effect runs once on component mount

  const fetchNews = async (url) => {
    try {
      const response = await axios.get(url);
      setNewsData(response.data.results);
      console.log(newsData);
      axios
        .post("http://localhost:5000/saveNewsData", { newsData })
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((error) => {
          console.error("Error saving news data:", error);
        });
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };
  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {sentimentData?.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p className="text-red-500">{article.content}</p>
            {sentimentData.length > 0 && (
              <div>
                <p>Polarity: {article?.Polarity}</p>
                <p>
                  Subjectivity: {article?.Subjectivity}
                </p>
              </div>
            )}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
