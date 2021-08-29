import "./Header.css"
import { Link } from "react-router-dom"

export default function Header(props){
    return(
        <header>
            <div className="container header-content">
                <Link to="/" className="header-content-title-link">
                    <h1 className="header-content-title">Hacker<br/>News</h1>
                </Link>
                {props.children}
            </div>
        </header>
    )
}