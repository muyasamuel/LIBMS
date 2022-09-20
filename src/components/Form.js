import "./Form.css";
import { useForm } from "react-hook-form";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import frontImage from '../images/bg4.jpg';
import backImage from '../images/bg5.jpg';


function Form() {
    const { register, handleSubmit , formState : { errors}, reset} = useForm();
    const { register: register2, formState: { errors: errors2 }, handleSubmit: handleSubmit2,   } =  useForm();


   const loginHandler = (data) =>{
    console.log(data);
    reset();
   }

   const signUpHandler = (data) => {
    console.log(data);
    reset();
   }
  return (
    <div className="containerWrapper">
      <div className="container">
      <input type="checkbox" id="flip" />
    <div class="cover">
      <div class="front">
         <img src={frontImage}  alt=""/>
         
        
      </div>
      <div class="back">
        <img class="backImg" src={backImage} alt=""/>
        
      </div>
    </div>
        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Login</div>
              <form action="#" onSubmit={handleSubmit(loginHandler)}>
                <div class="input-boxes">
                  <div class="input-box">
                  <FaEnvelope style={{width: '25px', height: '25px'}} />
                    <input type="text" placeholder="Enter your email"  />
                  </div>
                  <div class="input-box">
                  <RiLockPasswordLine style={{width: '30px', height: '30px'}} />
                    <input type="password" placeholder="Enter your password"  name="password" {...register("password", {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} />
                    {errors.password && <p style={{color: 'red'}}> Please fill in a correct password </p>}
                  </div>
                  <div class="text">
                    <a href="signup">forgot your password</a>
                  </div>
                  <div class="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div class="text sign-up-text">
                    Don't have an account? <label for="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div class="signup-form">
              <div class="title">Signup</div>
              <form action="#" onSubmit={handleSubmit2(signUpHandler)}>
                <div class="input-boxes">
                  <div class="input-box">
                    <BsFillPersonPlusFill style={{width: '30px', height: '30px'}} />
                    <input type="text" placeholder="Enter your name" name="name" {...register2("name" , {required: true , minLength: 5, maxLength: 12})}  />
                    {errors2.name && <p style={{color: 'red'}}> Please fill in a name </p>}

                  </div>
                  <div class="input-box">
                    <FaEnvelope  style={{width: '25px', height: '25px'}} />
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div class="input-box">
                  <RiLockPasswordLine style={{width: '30px', height: '30px'}} />
                    <input type="password" placeholder="Enter your password" name="signupPassword" {...register2("signupPassword", {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} />
                    {errors2.signupPassword && <p style={{color: 'red'}}> Please fill in a correct  sign up password </p>}
                  </div>
                  <div class="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div class="text sign-up-text">
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Form;
