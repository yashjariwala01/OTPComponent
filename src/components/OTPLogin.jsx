// import React, { useState } from 'react'
// import OTPComponent from './OTPComponent';

// const OTPLogin = () => {
//     const[phoneNumber,setPhoneNumber ]= useState('');
//     const [showOtpComp,setShowOtpComp] = useState(false);

//     const handleSubmit =(e)=>{
//         e.preventDefault();

//         const regex = /[0-9]/g;
//         if(phoneNumber.length == 10 || regex.test(phoneNumber)){
//             setShowOtpComp(true);
//             console.log('hello world')
//         }else{
//             alert('invalid phone number');
//             return
//         }
//     }

//     const onOtpSubmit=(otp)=>{
//         console.log('succesful submisson' ,otp)
//     }

//   return (
//     <div className='render'>
//      {
//         !showOtpComp ? (
//             <form onSubmit={handleSubmit}>
//             <input type="text" 
//             value={phoneNumber} 
//             onChange={(e)=> setPhoneNumber(e.target.value)}
//             placeholder='enter your Phone Number'
//             />
//                 <button type='submit'>Submit</button>
//             </form>
//         ):(
//             <div>
//                 <p>Enter the OTP sent to {phoneNumber}</p>
//                 <OTPComponent length={4} otpSubmit={onOtpSubmit}/>
//             </div>
//         )
//      }
//     </div>
//   )
// }

// export default OTPLogin



import React, { useState } from 'react';
import OTPComponent from './OTPComponent';

const OTPLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpComp, setShowOtpComp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /[0-9]/g;
    if (phoneNumber.length === 10 || regex.test(phoneNumber)) {
      setShowOtpComp(true);
      console.log('hello world');
    } else {
      alert('invalid phone number');
      return;
    }
  };

  const onOtpSubmit = (otp) => {
    console.log('OTP successfully submitted', otp);
  }



  return (
    <div className='container'>
      {!showOtpComp ? (
          <form className='form' onSubmit={handleSubmit} >
            <h1>LOGIN PAGE</h1>
          <input
            type='text'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Enter your Phone Number'
            className='input'
          />
          <button type='submit' className='button'>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>Enter the OTP sent to {phoneNumber}</p>
          <OTPComponent length={4} otpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default OTPLogin;


const ShowComponent =()=>{
  return (
    <h1>Hello</h1>
  )
}