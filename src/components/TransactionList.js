import React from "react";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Route, Switch,useParams} from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom/cjs/react-router-dom";


const TransactionList= () => {
    const{id}= useParams();
  const transactions = useFetch(`http://localhost:8080/transactions/${id}`)
    return(
        <div className="TransactionList">
            <Link to={`/pay/${id}`} className="New-transaction">New Transaction</Link>
            {transactions &&transactions.map((transaction)=>(
                <div className="transaction" key={transaction.id}>
                    <h3>{transaction.amount} {transaction.receiverAccountId} {transaction.description}</h3>
                </div>
            ))}
        </div>
    )
}
export default TransactionList;