import "../Header.css"
import { useState } from "react"
import { Icon } from '@iconify/react'; 

export default function SearchForm(){

    const [searchInput, setSearchInput] = useState();

    function handleChange(e){
        setSearchInput(e.target.value)
    }
    
    return(
        <form className="search-form">
            <label className="search-input">
                <Icon className="search-input-icon" icon="ant-design:search-outlined" />
                <input type="text" value={searchInput} onChange={handleChange}/>
            </label>
        </form>
    )
}