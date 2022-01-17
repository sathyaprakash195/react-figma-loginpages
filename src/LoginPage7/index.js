import React from "react";
import "./index.css";
import scenary from "./scenary.png";
function LoginPage7() {
  return (
    <div>
      <div
        className="login-page-7"
        style={{ backgroundImage: `url(${scenary})` }}
      >
        <div className="overlay"></div>

        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-md-4">
            <div className="text-part d-flex flex-column">
              <h1>LOGIN</h1>

              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />

              <div className="d-flex align-items-center justify-content-between bottom-part">
                <button>LOGIN</button>

                <div>
                  <a href="">Forgot Password</a> <br />
                  <a href="">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle">

        </div>
      </div>
    </div>
  );
}

export default LoginPage7;
