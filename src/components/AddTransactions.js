import { useRef, useState } from "react";
import React from "react";

const AddTransactions = ({onsubmit}) => {
    const [data,setdata]=useState({
        name:"",
        amount:"",
        transactiontype:"income"
    });
    const initialCountRef = useRef(data);
    // const formRef=useRef(null);
    const onchange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    }
    const addtransaction=(event)=>{
      event.preventDefault();
      var existingData = JSON.parse(localStorage.getItem('transactionList')) || [];
      existingData=[...existingData,data];
     localStorage.setItem("transactionList", JSON.stringify(existingData));
      onsubmit(data);
     setdata(initialCountRef.current);

    }
  return (
    <div className="transactionform">
      <h5 className="hb-1">Add Transaction</h5>
      <form  onSubmit={addtransaction}>
        <div className="form_group">
          <label>Transaction Name</label>
          <input
            type="text"
            className="form_input"
            placeholder="Transaction Name" name="name" value={data.name} onChange={onchange} />

        </div>
        <div className="form_group">
          <div className="transacttype">
            <input type="radio" className="form_input" name="transactiontype" value="income" onChange={onchange} />
            <label>Income</label>
            <input type="radio" className="form_input" name="transactiontype" value="expense" onChange={onchange} />
            <label>Expense</label>
          </div>
        </div>
        <div className="form_group">
          <label>Transaction Amount</label>
          <input
            type="text"
            className="form_input"
            placeholder="Transaction Amount" name="amount" value={data.amount} onChange={onchange} pattern="[0-9]*"/>
        </div>
        <div className="submitform">
          <input
            type="submit"
            className="btn btn_primary"
            value="Submit Transaction"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTransactions;
