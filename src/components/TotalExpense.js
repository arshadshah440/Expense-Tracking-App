import React from 'react'

const TotalExpense = ({balance}) => {
  return (
    <div className='haricard'>
        <h2>Your Balance</h2>
        <h1>{balance} $</h1>         
    </div>
  )
}

export default TotalExpense