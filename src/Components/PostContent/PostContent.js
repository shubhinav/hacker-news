import "./PostContent.css"
import { useContext } from "react"
import { SearchContext } from "../../Context/SearchContext"

export default function PostContent(){

    const {postData} = useContext(SearchContext)

    return(
        <div className="container post-content">
            <h1>{postData.title}</h1>
            {console.log(postData)}
        </div>
    )
}