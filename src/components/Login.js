
import './Login.css'

function Login() {
  
 

  return (
    <div className='loginContainer'>
       <form className="form-container" >
      
       
      
      <div className="form-element">
        <label className="label">Email Address</label>
        <input
          type="email"
          className="input"
          placeholder="contact@gmail.com"
        
        />
        
       </div>
      <div className="form-element">
        <label className="label">Password</label>
        <input
          type="password"
          className="input" 
          
        />
       
       
      </div>
      
      <button type="submit" className="button">
        Register
      </button>
      
      
    </form>
    </div>
    
  )
}

export default Login