import "./PostContent.css"
import { useContext } from "react"
import { SearchContext } from "../../Context/SearchContext"
import getDate from "../../Utils/getDate"

export default function PostContent(){

    const {postData} = useContext(SearchContext)
    const {month, year, day} = getDate(postData.created_at)

    const comments = postData.children.map(comment=>{
        const {month, year, day} = getDate(comment.created_at)

        return comment.text && 
        <div key={comment.id} className="post-content-comment">
            <div className="post-content-comment-header">
                <h3 className="post-content-comment-header-name">{comment.author}</h3>
                <p className="post-content-comment-header-date">{day} {month}, {year}</p>
            </div>
            <p className="post-content-comment-text" dangerouslySetInnerHTML={{__html: comment.text}}></p>
        </div>
    })

    return(
        <div className="container post-content">
            <div className="post-content-header">
                <h2>{postData.title}</h2>
                <div className="post-content-header-details">
                    <p className="post-content-header-author">By <span>{postData.author}</span> on <span>{day} {month}, {year}</span></p>
                    <p className="post-content-header-points"><span>{postData.points}</span> points</p>
                </div>
            </div>
            <div className="post-content-comment-list">
                {comments}
            </div>
        </div>
    )
}