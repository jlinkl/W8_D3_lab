import React, {useState, useEffect} from "react";
import NewsItems from "../components/newsItem";
import NewsSearch from "../components/filter";

const NewsContainer = () => {

    const [storyId, setStoryId] = useState([])
    const [stories, setStories] = useState([])
    const [storyData, setStoryData] = useState([])

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then(res => res.json()).then(data => {
            data.splice(50, data.length)
            setStoryId(data)
        })
        const storyPromises = storyId.map((story) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`).then(res => res.json())
        })
        console.log(storyPromises)
        Promise.all(storyPromises).then((data) => 
            setStories(data)
        )
    }, [])

    const selectStory = (story) => {

    }


    return(<>
    <NewsSearch stories={stories}/>
    </>)


}

export default NewsContainer