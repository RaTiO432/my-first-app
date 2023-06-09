import { useState } from 'react';
import React from 'react'
import "./OTPgenerator.css";
const OTPgenerator = () => {

    const [OTP,setOTP] = useState("");

    const OTPGenerateHandler=()=>
    {
        const num = "0123456789";
        let otpValue ="";
        for(let i=0;i<4;i++)
        {
            otpValue += num[Math.floor(Math.random() * 10)];
        }
        setOTP(otpValue);
    }
    const otpValueMessage=(
    <p>Your OTP is: {OTP}</p>
    )
    const noOTPValueMessage=(
        <p>Please click on button to generate OTP.</p>
    )
  return (
    <>
        <div className='d-flex justify-content-center'>
      <button type="button" className="btn btn-dark" onClick={OTPGenerateHandler}>Generate OTP</button>
    </div>
    <div className='d-flex justify-content-center mt-3 p-2'>
   {OTP ?otpValueMessage:noOTPValueMessage}
   </div>
    
    </>
    
  )
}

export default OTPgenerator
