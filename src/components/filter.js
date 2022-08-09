import React, {useState} from "react";
import NewsItems from "./newsItem";


const NewsSearch = ({stories}) => {
    const [query, setQuery] = useState("")

    const searchedStories = stories.filter(story => {
        if (query === '') {
            return story;
        } else if (story.title.toLowerCase().includes(query.toLowerCase())) {
            return story
        }
    })

    return (
    <>
    <div>
        <input placeholder='Enter Query' onChange={event => setQuery(event.target.value)}/>
    </div>
    <div>
        <NewsItems searchedStories={searchedStories}/>
    </div>
    </>    
    )
}
export default NewsSearch