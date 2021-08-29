import MainList from '../Components/MainList/MainList';
import Loader from '../Components/Loader/Loader'
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage';
import Header from "../Components/Header/Header"
import SearchForm from "../Components/SearchForm/SearchForm"
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';

export default function Home(){

    const {mainListData, isLoading, isError, noResults} = useContext(SearchContext)

    const whatToRenderInHomePage = () => {
        if(isError){ return <ErrorMessage icon="akar-icons:chat-error" title="Something went wrong." text="Try refreshing the page, or try after some time."/>}
        if(isLoading){ return <Loader/>}
        if(noResults){ return <ErrorMessage icon="akar-icons:chat-question" title="Your search does not match any results." text="Try searching for something else"/>}
        if(mainListData){ return <MainList/>}
    }
    
    return(
        <>
            <Header>
                <SearchForm/>
            </Header>
            {whatToRenderInHomePage()}
        </>
    )
}