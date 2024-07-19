import Expense from "./component/Expense";

function App() {
  const expenses=[
    {id:"1",date:new Date(2023,1,14), item:"Book",   price:"155"},
    {id:"2",date:new Date(2027,8,15), item:"pen",   price:"14"},
    {id:"3",date:new Date(2025,5,17), item:"kite",   price:"40"},
    {id:"4",date:new Date(2026,10,25), item:"wallet",   price:"200"}
  ]
  return (
    <>
    <h1>Just the basic things using react</h1>
    {
      expenses.map((expense,index)=>{
        return(
          <Expense
          date={expense.date} item={expense.item} price={expense.price}
          ></Expense>
        )
      })
    }
    </>
  );
}

export default App;
