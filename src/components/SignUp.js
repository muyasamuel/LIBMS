import './SignUp.css'

function SignUp() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <h2>Sign Up</h2>
            <div className='inputBox'>
                <span>Username</span>
                <input type='text'  />
                

            </div>
            <div className='inputBox'>
                <span>Password</span>
                <input type='text'  />
               

            </div>

            <div className='inputBox'>
            <span> Confirm Password</span>
            <input type='text'  />
           
            </div>

            <button> Enter</button>


        </div>

    </div>
  )
}

export default SignUp