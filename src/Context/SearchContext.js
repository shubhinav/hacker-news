import React from "react";
import { useEffect, useState } from "react";

const SearchContext = React.createContext()

function SearchContextProvider(props){

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState()
  const [mainListData, setMainListData] = useState()
  const [currentPage, setCurrentPage] = useState(0)
  const [query, setQuery] = useState("")
  const [postData, setPostData] = useState()

  function nextPage(){
      setCurrentPage(prevPage=>prevPage+1)
  }
  function prevPage(){
      setCurrentPage(prevPage=>prevPage-1)
  }
  function getQueryResults(input){
    setQuery(input)
    setCurrentPage(0)
  }

  function fetchPostData(id){
    setIsLoading(true)
    fetch(`http://hn.algolia.com/api/v1/items/${id}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        setPostData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
      });
  }

  useEffect(()=>{
      async function fetchData(){
          setIsLoading(true)
          fetch(`https://hn.algolia.com/api/v1/search?query=${query}&page=${currentPage}`).then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error();
              }
            })
            .then((data) => {
              setMainListData(data)
              setIsLoading(false)
            })
            .catch((error) => {
              setIsError(true)
            });
      }
      fetchData();
  },[currentPage, query])

  return(
      <SearchContext.Provider value={{mainListData,
                                      isLoading,
                                      isError,
                                      nextPage, 
                                      prevPage,
                                      currentPage,
                                      getQueryResults,
                                      postData,
                                      fetchPostData
                                      }}>
          {props.children}
      </SearchContext.Provider>
  )
}

export {SearchContextProvider, SearchContext}