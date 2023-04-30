import logo from './logo.svg';
import './App.css';
import TotalExpense from './components/TotalExpense';
import CompareTotal from './components/CompareTotal';
import EachTransaction from './components/EachTransaction';
import AddTransactions from './components/AddTransactions';
import { useState,useEffect } from 'react';

function App() {
  const [transactionList, setTransactionList] = useState([]);
  const [totalincome, settotalincome] = useState(0);
  const [totalexpense, settotalexpense] = useState(0);
  const [totalbalance, setttotalbalance]=useState(0);
  const handlesubmit = (formData) => {
    if(formData.transactiontype === "income"){
     var newincome=0;
      var existingData = JSON.parse(localStorage.getItem('totalincome'));
      if(existingData){
      newincome=existingData+parseInt(formData.amount);
      }else{
        newincome=totalincome+parseInt(formData.amount);
      }
      
     localStorage.setItem("totalincome", JSON.stringify(newincome));
      settotalincome(newincome);
    }
    else{
      var newexp=0;
      var expensedata = JSON.parse(localStorage.getItem('totalexp'));
      if(expensedata){
        newexp=expensedata+parseInt(formData.amount);
      }else{
         newexp = parseInt(formData.amount) + totalexpense;
      }
     
      localStorage.setItem("totalexp", JSON.stringify(newexp));
      settotalexpense(newexp);
    }
    if (transactionList.length === 0) {
      setTransactionList([formData]);
    } else {
      setTransactionList(prevTransactionList => [...prevTransactionList, formData]); 
    }
  };
useEffect(()=>{
  var balance=totalincome-totalexpense;
  setttotalbalance(balance);
  const listarray = JSON.parse(localStorage.getItem('transactionList'));
  if(listarray){
    setTransactionList(listarray);
  }
  const totalexp = JSON.parse(localStorage.getItem('totalexp'));
  if(totalexp){
    settotalexpense(totalexp);
  }
  const totalincomes = JSON.parse(localStorage.getItem('totalincome'));
  if(totalincomes){
    settotalincome(totalincomes);
  }

},[totalincome,totalexpense]);
  return (
    <div className="App">
      <h1 className='text-center'>Expenses Tracker</h1>
       <TotalExpense balance={totalbalance}/>
       <CompareTotal income={totalincome} expense={totalexpense}/>
       <EachTransaction list={transactionList}/>
       <AddTransactions onsubmit={handlesubmit} />
    </div>
  );
}

export default App;
