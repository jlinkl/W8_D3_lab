import React, { useState, useEffect } from "react";
import NewsSearch from "../components/filter";

const NewsContainer = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => res.json())
      .then((data) => {
        let newData = data.splice(20, data.length);
        const storyPromises = newData.map((story) => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${story}.json`
          ).then((res) => res.json());
        });
        Promise.all(storyPromises).then((data) => setStories(data));
      });
  }, []);

  return (
    <>
      <NewsSearch stories={stories} />
    </>
  );
};

export default NewsContainer;
