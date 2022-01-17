import React from "react";
import "./index.css";
function LoginPage4() {
  return (
    <div>
      <div className="login-page-4">
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-5 d-flex align-items-center justify-content-center">
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

        <div className="left-polygon">
          <svg
            width="503"
            height="738"
            viewBox="0 0 503 738"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M197 0.5L-87 121.5L-145.5 138.5L-239 411L-87 695L207 738L472.74 664.5L203 404L502.5 138.5L197 0.5Z"
              fill="#333A7E"
              fill-opacity="0.26"
            />
          </svg>
        </div>

        <div className="right-polygon">
          <svg
            width="503"
            height="738"
            viewBox="0 0 503 738"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M197 0.5L-87 121.5L-145.5 138.5L-239 411L-87 695L207 738L472.74 664.5L203 404L502.5 138.5L197 0.5Z"
              fill="#333A7E"
              fill-opacity="0.26"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LoginPage4;
