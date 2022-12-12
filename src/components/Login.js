import axios from 'axios';
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate  } from 'react-router-dom';
import './Login.css';
import { setAuthToken } from '../auth/Authenticate';

const defaulState = {
  emailAddress: {value: '' , error: null },
  password : {value: '' , error: null }
}

 function Login() {


 const navigate = useNavigate();

//  const navigateToContents = () => {
//   navigate('/contents')
//  }

  const token =  localStorage.getItem('loginToken');

  useEffect(() => {
    // If no token exists, redirect to the login page
    if (!token) {
      navigate('/login')
      
    }else{
      navigate('/contents')

    }
  }, [navigate, token]);



 const [loginFormState, setLoginFormState] =  useState(defaulState);
 const [errorMessage, setErrorMessage] = useState("");






 const changeHandler = (field, value) => {
  setLoginFormState({
       ...loginFormState,
      [field]: {
        value: value,
        error: null
      },
     });
 };

//  const getAuthentication =  async () => {

 


 
  
//  console.log(token);
  


//  }


 const handleSubmit =  (e) => {
    e.preventDefault();


    let hasError =   handleLoginErrors();

    if(hasError){
      return;
    }

    const { emailAddress, password } = loginFormState;
    const user = {
      email: emailAddress.value,
      password: password.value,
    }
   
 
  axios({
      method: 'post',
      url: "http://127.0.0.1:8000/api/user/login/",
      data: user
  })
  .then( (response) =>  {
 
    console.log(response);

    if (response.data.token) {

      const token  =  response.data.token;

      localStorage.setItem("user", token);
      navigate('/contents')
      toast.success('Successfully logged in');


      //set token to axios common header
        setAuthToken(token);
 
    
    } 

   
    return response.data;
   

  
     
  })
  .catch( (error) => {
   
      const errorMsg = error.response.data.detail;
      console.log(errorMsg);
      setErrorMessage(errorMsg)
  });
    
    console.log(user);
    setLoginFormState(defaulState);
    // getAuthentication();
     
 }




 const handleLoginErrors = () => {
  
  let loginUpdatedState = {...loginFormState};
  let error = false;

  const { emailAddress, password } = loginUpdatedState;


  const reg =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!emailAddress?.value?.match(reg)){
    loginUpdatedState.emailAddress.error = 'Email address is invalid';
    error = true;
  }


  if (!password?.value) {
    loginUpdatedState.password.error = 'Password cannot be empty';
    error = true;
  }

  if (password?.value.length < 5) {
    loginUpdatedState.password.error = 'Password cannot less than 5 characters';
    error = true;
  }
  setLoginFormState({
    ...loginFormState,
    ...loginUpdatedState,
  });
  return error;

 }
  


 

  return (
    <div className='loginContainer'>
       <form className="form-container" onSubmit={handleSubmit} >
       <div><Toaster/></div>
        
      <div className='error'>{errorMessage} </div>
       
      
      <div className="form-element">
        <label className="label">Email Address</label>
        <input
          type="email"
          className="input"
          placeholder="contact@gmail.com"
          value= {loginFormState?.emailAddress?.value}
          onChange={(e) => changeHandler('emailAddress', e.target.value)}
        
        />
        {loginFormState.emailAddress.error && <small className='error' > {loginFormState.emailAddress.error}</small>}
        
       </div>
      <div className="form-element">
        <label className="label">Password</label>
        <input
          type="password"
          className="input" 
          value= {loginFormState?.password?.value}
          onChange={(e) => changeHandler('password', e.target.value)}
        
          
        />
       {loginFormState.password.error && <small className='error'> {loginFormState.password.error}</small>}
       
      </div>
      
      <button type="submit" className="button">
        Login
      </button>
      
      
    </form>
    </div>
    
  )
}

export default Login