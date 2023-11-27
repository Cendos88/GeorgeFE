import AccountList from "./AccountList";
import useFetch from "./useFetch";

const Home = () => {
    const accounts = useFetch('http://localhost:8080/savingAccounts')
    function handleClickOnAccount(id) {
        const newAccount = accounts.filter(account => account.id === id);

    }

    return (
        <div className="Home">
        {accounts && <AccountList accounts={accounts} handleClickOnAccount={handleClickOnAccount} />}
        </div>
        );
}

export default Home;