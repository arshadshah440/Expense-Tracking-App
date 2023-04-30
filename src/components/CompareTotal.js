import React from 'react'

const CompareTotal = ({income,expense}) => {
  return (
    <div className='comparetotal'>
        <div className='totalincome'>
            <h6>Total Income</h6>
            <h5 className='text-green'>{income} $</h5>
         </div>
        <div className='totalincome'>
            <h6>Total Expenses</h6>
            <h5 className='text-red'>{expense} $</h5>
         </div>
    </div>
  )
}

export default CompareTotal