import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.bank.posted_at}</td>
      <td>{props.bank.description}</td>
      <td>{props.bank.category}</td>
      <td>{props.bank.amount}</td>
    </tr>
  )
}

export default Transaction
