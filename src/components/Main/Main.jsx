import React from "react";
//import CardDisplay from "../CardDisplay/CardDisplay";
//import "./Main.css";
 import Expense from "../Expense/Expense";
// import OTPgenerator from "../OTP generator/OTPgenerator";
const Main = () => {
  // const data = [
  //   {
  //     name: "rahul",
  //     age: 13,
  //     gender: "male",
  //     id: 1,
  //   },
  //   {
  //     name: "rajesh",
  //     age: 20,
  //     gender: "male",
  //     id: 2,
  //   },
  //   {
  //     name: "sakshi",
  //     age: 24,
  //     gender: "female",
  //     id: 3,
  //   },
  //   {
  //     name: "prerna",
  //     age: 44,
  //     gender: "female",
  //     id: 4,
  //   },
  //   {
  //     name: "ram",
  //     age: 50,
  //     gender: "male",
  //     id: 5,
  //   },
  //   {
  //     name: "sita",
  //     age: 30,
  //     gender: "female",
  //     id: 6,
  //   },
  //   {
  //   name: "rita",
  //   age: 29,
  //   gender: "female",
  //   id: 7,
  // },
  // {
  //   name: "suresh",
  //   age: 45,
  //   gender: "male",
  //   id: 8,
  // },
  // {
  //   name: "priyanka",
  //   age: 33,
  //   gender: "female",
  //   id: 9,
  // },
  // ];
  return (
    <React.Fragment>
      <main>
    <Expense></Expense>
    {/* <OTPgenerator></OTPgenerator> */}
    {/* <BMIcalc></BMIcalc> */}





      {/* <div class="container">
  {data.map((ele, index, arr) => (
          <CardDisplay
            name={ele.name}
            age={ele.age}
            gender={ele.gender}
            // key={index}
            id={ele.id}
            key={ele.id}
          />
        ))}
</div> */}

        
        {/* <UserDetails
          name={data[0].name}
          age={data[0].age}
          gender={data[0].gender}
          id={data[0].id}
        />
        <UserDetails
          name={data[1].name}
          age={data[1].age}
          gender={data[1].gender}
          id={data[1].id}
        />
        <UserDetails
          name={data[2].name}
          age={data[2].age}
          gender={data[2].gender}
          id={data[2].id}
        />
        <UserDetails
          name={data[3].name}
          age={data[3].age}
          gender={data[3].gender}
          id={data[3].id}
        /> */}
      </main>
      </React.Fragment>
  )}
export default Main;