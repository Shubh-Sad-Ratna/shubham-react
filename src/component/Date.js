import "./Date.css"
function Date(props){
    const months=["January", "February","March","April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const day=props.date.getDate();
    const month =months[props.date.getMonth()];
    const year=props.date.getFullYear();
    return(
        
        <div className="item">
            <div>{day }</div>
            <div>{month }</div>
            <div>{year }</div>
        </div>
        
    )
}
export default Date;