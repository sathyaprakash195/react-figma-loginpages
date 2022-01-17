import React from "react";
import "./index.css";
import lion from "./lion.png";
function LoginPage3() {
  return (
    <div>
      <div className="login-page-3">
        <div className="row h-100 parent-row">
          <div className="col-md-4 parent-first-part"></div>
          <div className="col-md-8 parent-second-part"></div>
        </div>

        <div className="row child-row">
          <div className="col-md-4 child-first-part d-flex align-items-center">
            <img src={lion} alt="" height="300" width="300" />
          </div>
          <div className="col-md-8 child-second-part d-flex align-items-center justify-content-center">
            <div className="text-part d-flex flex-column">
              <h1>LOGIN</h1>

              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />

              <div className="d-flex align-items-center justify-content-between">
                <button>LOGIN</button>

                <div>
                  <a href="">Forgot Password</a> <br />
                  <a href="">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage3;
