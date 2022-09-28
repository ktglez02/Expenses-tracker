import React , {useState} from 'react'; 
import "./Expenses.css";
import Card from '../UI/Card'; 
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList.js";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

const [filteredYear, setFilteredYear] = useState('2020'); 
const filterChangeHandler = selectedYear => 
{
  setFilteredYear(selectedYear); //use two way binding so that the last vaalue imputed no se quede de ultimo en el dornwdown menu
};
const filteredExpenses = props.items.filter(expense =>
  {
return expense.date.getFullYear().toString() == filteredYear; 
  });


  return (
   <div>
    <Card className='expenses'>
    <ExpensesFilter 
    selected= {filteredYear} 
    onChangeFilter = {filterChangeHandler}
    /> 
    <ExpensesChart expenses = {filteredExpenses}/>
  <ExpenseList items = {filteredExpenses}/>
    </Card>
    </div>
  );
}
export default Expenses;
