import "./Header.css"
import SearchForm from "./InputForm/SearchForm"

export default function Header(){
    return(
        <header>
            <div className="container header-content">
                <h1 className="header-content-title">HN<br/>Search</h1>
                <SearchForm/>
            </div>
        </header>
    )
}