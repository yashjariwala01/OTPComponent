import React, { useState,useRef, useEffect } from 'react'

const OTPComponent = ({length=4, otpSubmit}) => {    
    
    console.log('length',length)
    const [OTP, setOTP] = useState(new Array(length).fill(''));

    const inputRefs = useRef([]);
    console.log(inputRefs);

    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[]);
    let blockOtp;

    const handleChange=(index,e)=>{
        const value = e.target.value;

        blockOtp = [...OTP];
        blockOtp[index] = value.substring(value.length -1);
        setOTP(blockOtp);

        const StrOTP = blockOtp.join('')
        
        if(StrOTP.length === length){ 
          otpSubmit(StrOTP)
          
        }
        if(value && index < length-1 ){
            inputRefs.current[index+1].focus();
        }
    }
    const handleClick=(index)=>{
        inputRefs.current[index].setSelectionRange(1,1);
        
        if( index > 0 && !OTP[index-1]){
            inputRefs.current[OTP.indexOf('')].focus();
        }        
    }

    const handleKeyDown =(index,e)=>{

        if (
            e.key === "Backspace" &&
            !OTP[index] &&
            index > 0
          ) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
          }
    }


  return (
    <div >
         {
        OTP.map((ele,index)=>(
            <input 
            className='abc'
            type="text"
            key={index}
            ref={(input)=>(inputRefs.current[index] = input)} 
            value={ele} 
            onChange={(e)=> handleChange(index,e)}
            onClick={(e)=> handleClick(index)}
            onKeyDown={(e)=> handleKeyDown(index,e)}
            />
        ))
      }
   
    </div>
  )
}

export default OTPComponent
