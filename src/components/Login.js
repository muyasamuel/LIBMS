import { useState } from 'react';
import './Login.css'

const Login = () => {

   const [ name, setName] = useState('');
   const [ password, setPassword] = useState('');

   const submitHandler = (e) =>{
    e.preventDefault();

    console.log({
        name,
        password
    });

    setName('');
    setPassword('')
   }

  return (
    <div className='formContainer'> 
     <div className='formWrapper'>
        <h1>Login</h1>
        <form onSubmit={submitHandler} >
        <input  type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
        <input  type='password' placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)}  />
        <button>Login</button>
        </form>
        
     </div>
        
        
    </div>
  )
}

export default Login;