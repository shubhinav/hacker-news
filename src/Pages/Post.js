import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { SearchContext } from "../Context/SearchContext"
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage"
import Loader from "../Components/Loader/Loader"
import PostContent from "../Components/PostContent/PostContent"

export default function Post(){

    const {postData, fetchPostData, isLoading, isError} = useContext(SearchContext)
    const {postID} = useParams()

    useEffect(()=>{
        fetchPostData(postID)
    },[postID]) // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
            {isError 
            ? 
            <ErrorMessage/>
            : 
            (isLoading ? <Loader/> : (postData && <PostContent/>))}
        </>
    )
}