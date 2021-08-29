import "./SearchForm.css"
import { useState, useContext } from "react"
import { Icon } from '@iconify/react'; 
import { SearchContext } from "../../Context/SearchContext";

export default function SearchForm(){

    const {getQueryResults} = useContext(SearchContext)
    const [searchInput, setSearchInput] = useState("");

    function handleChange(e){
        setSearchInput(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        getQueryResults(searchInput)
    }
    
    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-icon"><Icon icon="ant-design:search-outlined" /></div>    
            <input className="search-form-input" type="text" value={searchInput} onChange={handleChange}/>
            <button className="search-form-submit-btn"><Icon icon="akar-icons:arrow-right"/></button>
        </form>
    )
}