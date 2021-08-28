import MainList from '../Components/MainList/MainList';
import Loader from '../Components/Loader/Loader'
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage';
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';

export default function Home(){

    const {mainListData, isLoading, isError} = useContext(SearchContext)
    
    return(
        <>
            {isError 
            ? 
            <ErrorMessage/>
            : 
            (isLoading ? <Loader/> : (mainListData && <MainList/>))}
        </>
    )
}