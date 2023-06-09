import React from 'react'
import "./ExpenseList.css"
const ExpenseList = ({ name, amount, date, index }) => {
  return (
    <>
    <div className="container list-group pe-auto">
      <div className="row mt-2 mb-2 alert alert-info">
        <div className="col-md">
          <div className="d-flex justify-content-between" key={index}>
        <p>Name: {name}</p>
        <p>Amount: {amount}</p>
        <p>Date: {date}</p>
      </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ExpenseList
