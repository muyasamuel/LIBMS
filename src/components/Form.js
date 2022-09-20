import "./Form.css";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import frontImage from '../images/bg4.jpg';
import backImage from '../images/bg5.jpg';


function Form() {
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
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                  <FaEnvelope style={{width: '25px', height: '25px'}} />
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div class="input-box">
                  <RiLockPasswordLine style={{width: '30px', height: '30px'}} />
                    <input type="password" placeholder="Enter your password" />
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
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                  <BsFillPersonPlusFill style={{width: '30px', height: '30px'}} />
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div class="input-box">
                    <FaEnvelope  style={{width: '25px', height: '25px'}} />
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div class="input-box">
                  <RiLockPasswordLine style={{width: '30px', height: '30px'}} />
                    <input type="password" placeholder="Enter your password" />
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
