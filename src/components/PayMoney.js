import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const PayMoney = () => {
    const { accountId } = useParams();
    return (
        <div className="Pay">
        
            <label>Amount</label>
            <input id="amount" ></input>
            <label>To Account</label>
            <input className='receiverId'></input>
            <label >Description</label>
            <input className='description'></input>
            <button>Send Money</button>
        </div>);
}

export default PayMoney;