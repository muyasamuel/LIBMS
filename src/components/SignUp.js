import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css'

function SignUp() {
  const defaultFormState = {
    name: { value: '', error: null },
    emailAddress: { value: '', error: null },
    password: { value: '', error: null },
    confirmPassword: { value: '', error: null },
  };

  const [formState, setFormState] = useState(defaultFormState);
  

  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');

  }

 

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
    let hasErrors = handleFormValidations();
    

    if (hasErrors) {
      setSuccess(false);
      return;
    }
    setSuccess(true);


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


    navigateToLogin();

    console.log(data);
      










 

  };

  const handleFormValidations = () => {
    
    let updatedState = { ...formState };
    let error = false;

    const { name,  emailAddress, password, confirmPassword } =
      updatedState;

    if (name.value?.length < 3) {
      updatedState.name.error =
        ' Name cannot be less than 3 characters';
      error = true;
    }
   

    const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailAddress?.value?.match(re)) {
      updatedState.emailAddress.error = 'Email address is invalid';
      error = true;
    }

    if (
      password?.value &&
      confirmPassword?.value &&
      password?.value !== confirmPassword?.value
    ) {
      updatedState.confirmPassword.error = 'Passwords do not match';
      error = true;
    }

    if (!password?.value) {
      updatedState.password.error = 'Password cannot be empty';
      error = true;
    }
    if (!confirmPassword?.value) {
      updatedState.confirmPassword.error = 'Confirm Password cannot be empty';
      error = true;
    }

    setFormState({
      ...formState,
      ...updatedState,
    });
    return error;
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
        {formState?.name?.error && (
          <small className="error">{formState.name.error}</small>
        )}
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
         {formState?.emailAddress?.error && (
          <small className="error">{formState.emailAddress.error}</small>
        )}
       </div>
      <div className="form-element">
        <label className="label">Password</label>
        <input
          type="password"
          className="input" 
          value={formState?.password?.value}
          onChange={(e) => onChangeHandler('password', e.target.value)}
        />
        {formState?.password?.error && (
          <small className="error">{formState.password.error}</small>
        )}
       
      </div>
      <div className="form-element">
        <label className="label">Confirm Password</label>
        <input
          type="password"
          className="input"
          value={formState?.confirmPassword?.value}
          onChange={(e) => onChangeHandler('confirmPassword', e.target.value)}
          
          
        />
          {formState?.confirmPassword?.error && (
          <small className="error">{formState.confirmPassword.error}</small>
        )}
      
      </div>
      <button type="submit" className="button">
        Register
      </button>
      {success && (
        <p className="success">Form as been submitted successfully!</p>
      )}
      
    </form>
    </div>
    
  )
}

export default SignUp