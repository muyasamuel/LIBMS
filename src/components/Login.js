import { useForm } from "react-hook-form";
import './Login.css'

const Login = () => {
  const { register, handleSubmit , formState : { errors}, reset} = useForm();

   

   const submitHandler = (data) =>{
 console.log(data);
 reset();

    
   }
  return (
    <div className='formContainer'> 
     <div className='formWrapper'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitHandler)} >
          <div>
          <input  type='text' placeholder='Enter name'name='name' {...register("name" , {required: true , minLength: 5, maxLength: 12})}  />
          {errors.name && <p style={{color: 'red'}}> Please fill in a name </p>}

          </div>
        <div>
          <input  type='password' placeholder='Password'  name='password' {...register("password", {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })}  />
          {errors.password && <p style={{color: 'red'}}> Please fill in a correct password </p>}
        </div>
        
        <button>Login</button>
        </form>
        
     </div>
        
        
    </div>
  )
}

export default Login;