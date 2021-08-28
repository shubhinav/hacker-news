import "../Header.css"
import { useState, useContext } from "react"
import { Icon } from '@iconify/react'; 
import { SearchContext } from "../../../Context/SearchContext";

export default function SearchForm(){

    const {getQueryResults} = useContext(SearchContext)
    const [searchInput, setSearchInput] = useState("");

    function handleChange(e){
        setSearchInput(e.target.value)
        getQueryResults(e.target.value)
    }
    
    return(
        <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
            <label className="search-input">
                <Icon className="search-input-icon" icon="ant-design:search-outlined" />
                <input type="text" value={searchInput} onChange={handleChange}/>
            </label>
        </form>
    )
}