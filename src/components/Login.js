import './Login.css'

const Login = () => {
  return (
    <div className='container'> 
     <div className='wrapper'>
        <form className='form'>
        <input  placeholder='Enter name' />
        <input  placeholder='Password' />
        <button>Login</button>
        </form>
        
     </div>
        
        
    </div>
  )
}

export default Login;