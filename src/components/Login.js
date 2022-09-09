import './Login.css'

const Login = () => {
  return (
    <div className='formContainer'> 
     <div className='formWrapper'>
        <h1>Login</h1>
        <form >
        <input  type='text' placeholder='Enter name' />
        <input  type='password' placeholder='Password' />
        <button>Login</button>
        </form>
        
     </div>
        
        
    </div>
  )
}

export default Login;