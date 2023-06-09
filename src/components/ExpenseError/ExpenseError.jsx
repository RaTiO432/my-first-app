import React from 'react'

const ExpenseError = (props) => {
  return (
    <>

      {props.showMessage && (<div className="row">
        <div className="col-md">
          <p className="text-center text-danger fs-3 text">
          Error:-{props.message}
          </p>
        </div>
      </div>)}
      {props.amountshowMessage && (<div className="row">
        <div className="col-md">
          <p className="text-center text-danger fs-3 text">{props.amountMessage}</p>
        </div>
      </div>)}
      
    </>
  )
}

export default ExpenseError
