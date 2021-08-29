
export default function getDate(date){
    let year = new Date(date).getFullYear()
    let month = new Date(date).toLocaleString('default', { month: 'short' });
    let day = new Date(date).toLocaleString('default', { day: 'numeric' });
    return {month, year, day}
}