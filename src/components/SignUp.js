import { useState } from 'react'
import './SignUp.css'

function SignUp() {
  const defaultFormState = {
    name: { value: '', error: null },
    emailAddress: { value: '', error: null },
    password: { value: '', error: null },
    confirmPassword: { value: '', error: null },
  };

  const [formState, setFormState] = useState(defaultFormState);
  

 

  const onChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: {
        value: value,
        error: null,
      },

    
    });
  };
  const handleSubmit =  (e) => {
    e.preventDefault();
   

    let updatedState = {...formState};
    const { name,  emailAddress, password } = updatedState;
    const data = { name: name.value, email: emailAddress.value, password: password.value} ;

    fetch("http://127.0.0.1:8000/api/user/sign-up/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:  JSON.stringify(data)
   
    }).catch( err => {
      console.log(err.response)
    });

    console.log(data);
      










 

  };

 

  return (
    <div className='container'>
       <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-element">
        <label className="label"> Name</label>
        <input
          type="text"
          className="input"
          placeholder="Samuel"
          value={formState?.name?.value}
          onChange={(e) => onChangeHandler('name', e.target.value)}
        /> 
        
      </div>
      <div className="form-element">
        <label className="label">Email Address</label>
        <input
          type="email"
          className="input"
          placeholder="contact@gmail.com"
          value={formState?.emailAddress?.value}
         
          onChange={(e) => onChangeHandler('emailAddress', e.target.value)}
        />
      
       </div>
      <div className="form-element">
        <label className="label">Password</label>
        <input
          type="password"
          className="input" 
          value={formState?.password?.value}
          onChange={(e) => onChangeHandler('password', e.target.value)}
        />
       
       
      </div>
      <div className="form-element">
        <label className="label">Confirm Password</label>
        <input
          type="password"
          className="input"
          value={formState?.confirmPassword?.value}
          onChange={(e) => onChangeHandler('confirmPassword', e.target.value)}
          
          
        />
         
      
      </div>
      <button type="submit" className="button">
        Register
      </button>
     
    </form>
    </div>
    
  )
}

export default SignUp