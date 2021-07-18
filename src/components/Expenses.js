import Card from './Card';
import ExpenseItems from './ExpenseItems';
import './Expenses.css';
const Expenses = ({expenses}) => {
    return (
        <Card className="expenses">
            {expenses.map(item=>(<ExpenseItems key={item.id} title={item.title}amount={item.amount} date={item.date}></ExpenseItems>)) }
        </Card>
    )
}

export default Expenses
