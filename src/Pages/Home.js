import MainList from '../Components/MainList/MainList';
import Loader from '../Components/Loader/Loader'
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage';
import Header from "../Components/Header/Header"
import InputForm from "../Components/SearchForm/SearchForm"
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';

export default function Home(){

    const {mainListData, isLoading, isError} = useContext(SearchContext)
    
    return(
        <>
            <Header>
                <InputForm/>
            </Header>
            {isError 
            ? 
            <ErrorMessage/>
            : 
            (isLoading ? <Loader/> : (mainListData && <MainList/>))}
        </>
    )
}