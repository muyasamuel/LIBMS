import "./Form.css";
import { useForm } from "react-hook-form";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import frontImage from "../images/bg4.jpg";
import backImage from "../images/bg5.jpg";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
    reset: reset2
  } = useForm();

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const loginHandler = (data) => {
    console.log(data);
    reset();
  };

  const signUpHandler = (data) => {
    console.log(data);
    reset2();
  };
  return (
    <div className="containerWrapper">
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={frontImage} alt="" />
          </div>
          <div className="back">
            <img className="backImg" src={backImage} alt="" />
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#" onSubmit={handleSubmit(loginHandler)}>
                <div className="input-boxes">
                  <div className="input-box">
                    <FaEnvelope style={{ width: "25px", height: "25px" }} />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern: emailPattern,
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p style={{ color: "red" }}> Please fill in an email </p>
                  )}
                  <div className="input-box">
                    <RiLockPasswordLine
                      style={{ width: "30px", height: "30px" }}
                    />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                      })}
                    />
                  </div>
                  {errors.password && (
                    <p style={{ color: "red" }}>
                      Please fill in a correct password{" "}
                    </p>
                  )}
                  <div className="text">
                    <a href="signup">forgot your password</a>
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account? <label htmlFor="flip" >Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form  onSubmit={handleSubmit2(signUpHandler)}>
                <div className="input-boxes">
                  <div className="input-box">
                    <BsFillPersonPlusFill
                      style={{ width: "30px", height: "30px" }}
                    />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      {...register2("name", {
                        required: true,
                        minLength: 5,
                        maxLength: 12,
                      })}
                    />
                  </div>
                  {errors2.name && (
                    <p style={{ color: "red" }}> Please fill in a name </p>
                  )}

                  <div className="input-box">
                    <FaEnvelope style={{ width: "25px", height: "25px" }} />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      {...register2("email", {
                        required: true,
                        pattern: emailPattern,
                      })}
                    />
                  </div>
                  {errors2.email && (
                    <p style={{ color: "red" }}>
                      Please fill in a valid email
                    </p>
                  )}
                  <div className="input-box">
                    <RiLockPasswordLine
                      style={{ width: "30px", height: "30px" }}
                    />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="signupPassword"
                      {...register2("signupPassword", {
                        required: true,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                      })}
                    />
                  </div>
                  {errors2.signupPassword && (
                    <p style={{ color: "red" }}>
                      Please fill in a correct sign up password{" "}
                    </p>
                  )}
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account? <label htmlFor="flip">Login now</label>
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
