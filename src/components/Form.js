import "./Form.css";


function Form() {
  return (
    <div className="containerWrapper">
      <div className="container">
        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Login</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your password" />
                  </div>
                  <div class="text">
                    <button>Forgot your Password</button>
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
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
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
