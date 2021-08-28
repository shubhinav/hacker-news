import "../MainList.css"
export default function ListEntry({hit}){
    const year = new Date(hit.created_at).getFullYear()
    const month = new Date(hit.created_at).toLocaleString('default', { month: 'short' });
    return(
        <div className="list-entry">
            <h1 className="list-entry-title">{hit.title}</h1>
            <div className="list-entry-details">
                <span>{month}, {year}</span>
                <span>{hit.points} points</span>
                <span>{hit.num_comments} comments</span>
            </div>
            {hit.url && <p className="list-entry-url"><a href={hit.url} target="_blank" rel="noreferrer">{hit.url}</a></p>}
        </div>
    )
}