import "../MainList.css"
import { Link } from "react-router-dom"
import getDate from "../../../Utils/getDate"
import { useContext } from "react"
import {ThemeContext} from "../../../Context/ThemeContext"

export default function ListEntry({hit}){
    const {month, year} = getDate(hit.created_at)
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`${theme}-list-entry list-entry`}>
            <Link to={`/post/${hit.objectID}`} className="list-entry-title-link">
                <h1 className="list-entry-title">{hit.title}</h1>
            </Link>
            <div className="list-entry-details">
                <span>{month}, {year}</span>
                <span>{hit.points} points</span>
                <span>{hit.num_comments} comments</span>
            </div>
            {hit.url && <p className="list-entry-url"><a href={hit.url} target="_blank" rel="noreferrer">{hit.url}</a></p>}
        </div>
    )
}