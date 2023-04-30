import React from 'react'

const EachTransaction = ({ list }) => {
  return (
    <div className='translist'>
      <h2 className='hb-1'>History</h2>
      {list.map((transaction, index) => (
      <div className={transaction.transactiontype === "income" ? "transaction incomedone" : "transaction expensedone"} key={index}>
        <div className="transaction_type">
           <h6 className='smallheading'>{transaction.transactiontype === "income" ? "income":"expense"} </h6>
        </div>
        <div className='h-flex'>
          <h3>{transaction.name}</h3>
          <h4>{transaction.amount} $</h4>
        </div>
       
      </div>
    
      ))}

      <h6>{list.length === 0 ?"No history found" :"" }</h6>
    </div>
  )
}

export default EachTransaction