import { useState } from 'react';
import React from 'react'

const ExpenseForm = (props) => {

    const InitialValue =[];
    const [ExpenseData,setExpenseData] = useState(InitialValue);



    const[name,Setname] = useState("");
    const[amount,Setamount] = useState("");
    const[date,Setdate] = useState("");
    

    const NameChangeHandler =(event)=>{
       
        Setname(event.target.value);
    }
    const AmountChangeHandler=(event)=>{
        
        Setamount(event.target.value);
    }
    const DateChangeHandler=(event)=>{
        
        Setdate(event.target.value);
    }
    const SubmitHandler=()=>
    { 
      const data = {date,amount,name}
      if (name) {
        props.showMessageHandler(false);
        if (amount) {
          props.showAmountMessageHandler(false);
          props.ExpenseDataHandler(data);
          Setname("");
          Setamount("");
          Setdate("");
        }
        else {
          props.showAmountMessageHandler(true);
        }
        console.log(data);
      }
      else {
        props.showMessageHandler(true);
      }

    }
    const ClearExpenseFormHandler=()=>
    {
      Setamount("");
      Setdate("");
      Setname("");
    }
    const ClearExpenseHandler=()=>
    {
      setExpenseData("");
        }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md">
                <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event)=>NameChangeHandler(event)
                }
                value={name}
              />
            </div>
            name value:- {name}
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Amount
              </span>
              <input
                type="Number"
                className="form-control"
                placeholder="Amount"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={AmountChangeHandler}
                value={amount}
              />
            </div>
            amount:- {amount}
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Date
              </span>
              <input
                type="date"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={DateChangeHandler}
                value={date}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="row">
          <div className="col-md">
            <button type="button" className="btn btn-success" onClick={SubmitHandler}>
              Add Expense
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <button type="button" className="btn btn-success" onClick={ClearExpenseFormHandler}>
              Clear Expense Form
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <button type="button" className="btn btn-success" onClick={ClearExpenseHandler}>
              Clear Expense
            </button>
          </div>
        </div>
        </div>
        
      </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExpenseForm
