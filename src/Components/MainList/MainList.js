import "./MainList.css"
import { useContext } from "react"
import { SearchContext } from "../../Context/SearchContext"
import ListEntry from "./ListEntry/ListEntry"
import { Icon } from "@iconify/react"

export default function MainList(){
    const {mainListData, nextPage, prevPage, currentPage} = useContext(SearchContext)
    const {hits} = mainListData

    const listEntries = hits.map(hit=>{
        return hit.title && <ListEntry hit={hit} className="list-entry" key={hit.objectID}/>
    })

    return(
        <>              
            <div className="container main-list">
                {listEntries}
            </div>

            <div className="container pagination">
                <button className="pagination-btn" onClick={prevPage} disabled={currentPage===0}><Icon icon="akar-icons:chevron-left"/></button>
                <span className="page-number">{mainListData.page + 1}/{mainListData.nbPages}</span>
                <button className="pagination-btn" onClick={nextPage} 
                    disabled={currentPage>=mainListData.nbPages-1 || currentPage>=Math.floor(mainListData.nbHits/20)+1}>
                    <Icon icon="akar-icons:chevron-right"/>
                </button>
            </div> 
        </>
    )
}