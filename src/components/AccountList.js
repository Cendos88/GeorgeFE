import { Link } from "react-router-dom/cjs/react-router-dom";

const AccountList = ({accounts,handleClickOnAccount}) => {
   //const accounts = props.accounts;
   //console.log(props.accounts)
    return (
        <div className="AccountList">
            {accounts.map((account) => (
                <div className="account-preview" key={account.id} >
                    <Link to={`/account/${account.id}`} onClick={()=> handleClickOnAccount(account.id)}>{account.name} {account.balance} {account.AccountType}</Link>
                   
                </div>

            ))}
        </div>
    )
}
export default AccountList;