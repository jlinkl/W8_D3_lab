import React, {useParams} from "react";
import ListItem from "./ListItem";

const NewsItems = ({searchedStories}) => {

    const newsItems = searchedStories.map((story, index) => {
        return <ListItem story={story} key={index} />
    })

    return(
        <>
        <ul>
        {newsItems}
        </ul>
        </>
    )


}


export default NewsItems