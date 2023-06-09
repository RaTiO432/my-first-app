//Use state is a react hook

import { useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseError from "../ExpenseError/ExpenseError";



const Expense = () => {
  
  const [ExpenseData,setExpenseData] = useState([]);
  const [message,Setmessage] = useState("Enter Name");
  const [showMessage,SetshowMessage] = useState(false);
  const [amountMessage,SetamountMessage] = useState("Enter Amount");
  const [amountshowMessage,SetamountshowMessage] = useState(false);
  
const ExpenseDataHandler=(data)=>
{
  setExpenseData((prevState)=>[...prevState,data]);
}

const showMessageHandler= (msg) =>
{
  console.log(msg);
  SetshowMessage(msg);
}
const MessageHandler =(msgStatus)=>
{
  console.log(msgStatus);
}
const showAmountMessageHandler= (amtmsg) =>
{
  console.log(amtmsg);
  SetamountshowMessage(amtmsg);
}
const AmountMessageHandler =(amtmsgStatus)=>
{
  console.log(amtmsgStatus);
}

  return (
    <>
    <ExpenseForm 
    ExpenseDataHandler={ExpenseDataHandler}
      showMessageHandler={showMessageHandler}
      MessageHandler={MessageHandler}
      showAmountMessageHandler={showAmountMessageHandler}
      AmountMessageHandler={AmountMessageHandler}
    />
      
      <hr></hr>

      <div className="container">
      <ExpenseError
        showMessage ={showMessage}
        message={message}
        amountshowMessage ={amountshowMessage}
        amountMessage={amountMessage}
      />
      <div className="row">
        <div className="col-md">
            <p className="text-center fs-2 fw-medium font-monospace">Expense List</p>
        </div>
      </div>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                {ExpenseData.length!==0?
                ExpenseData.map((ele,index,arr) => (

                  
                  <ExpenseList name={ele.name}
                  amount={ele.amount}
                  date={ele.date}
                  index={index}
                    key = {index}
                  />
                )): <p className="text-center font-monospace">Enter Expense</p>}
            </div>
            <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Expense;
