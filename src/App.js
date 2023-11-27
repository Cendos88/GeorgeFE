import Greeting from './components/Greeting'
import './App.css';
import AccountList from './components/AccountList';
import TransactionList from './components/TransactionList';
import { useEffect, useState } from 'react';
import useFetch from './components/useFetch';
import { BrowserRouter as Router, Route, Switch,useParams} from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import PayMoney from './components/PayMoney';
import HomeBtn from './components/HomeBtn';

function App() {
  //const jwt =""
 
 






  return (
    <Router>
      <div className='App'>
        <Greeting />
        <HomeBtn/>
        
        {/*  <Home/>
      <TransactionList transactions={transactions} /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/pay/:accountId">
            <PayMoney/>
          </Route>
          <Route  path='/account/:id'>
            
            <TransactionList/>
           
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
