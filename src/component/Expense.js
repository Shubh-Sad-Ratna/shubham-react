import "./Expense.css"
import Date from "./Date";
function Expense(props){
    
    return(
        <div className="expense-item">
        <Date date={props.date}></Date>
        <div className="item">{props.item}</div>
        <div className="item">{props.price}</div>
        </div>
    )
}
export default Expense;