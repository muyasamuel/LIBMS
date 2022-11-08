import './SignUp.css'

function SignUp() {
  return (
    <div className='container'>
       <form className="form-container">
      <div className="form-element">
        <label className="label">First Name</label>
        <input
          type="text"
          className="input"
          placeholder="Samuel"
        /> 
      </div>
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
      <div className="form-element">
        <label className="label">Confirm Password</label>
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

export default SignUp