import React from "react";
import "./index.css";
function LoginPage8() {
  return (
    <div>
      <div className="login-page-8">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-md-4">
            <div className="text-part d-flex flex-column">
              <h1>LOGIN</h1>

              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />

              <button>LOGIN</button>

              <div className="d-flex justify-content-between mt-2 w-100 align-items-center">
                <div className="left-divider"></div>
                <p className="mb-2 mx-2">OR</p>
                <div className="right-divider"></div>
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <img
                  height="40"
                  width="40"
                  className="mx-5"
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt=""
                />
                <img
                  className="mx-5"
                  height="30"
                  width="30"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-between">
                <a href="" className="mt-3 text-center">
                  Forgot password
                </a>

                <a href="" className="mt-3 text-center">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-left-curve">
          <svg
            width="709"
            height="582"
            viewBox="0 0 709 582"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M709 582C709 741.155 128.904 623.5 -11.0001 623.5C-150.904 623.5 -239.44 516.655 -239.44 357.5C-80.4399 417 -311.44 82.0001 3.06006 7.00012C317.56 -67.9999 -2.56018 522.621 709 582Z"
              fill="url(#paint0_linear_1_243)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_243"
                x1="234.78"
                y1="0.429901"
                x2="234.78"
                y2="699.083"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.411458"
                  stop-color="#02B94B"
                  stop-opacity="0.84"
                />
                <stop offset="1" stop-color="#046AB4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="top-right-curve">
          <svg
            width="345"
            height="618"
            viewBox="0 0 345 618"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M819 41C819 -106.484 210.881 -60.8184 66.5343 -60.8184C-77.8128 -60.8184 454.414 553.099 66.5343 617.503C230.584 562.366 -199.488 188.503 125 258.003C449.488 327.503 84.8411 96.0245 819 41Z"
              fill="url(#paint0_linear_1_244)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_244"
                x1="36.6371"
                y1="493.94"
                x2="36.6371"
                y2="-153.48"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.411458"
                  stop-color="#02B94B"
                  stop-opacity="0.84"
                />
                <stop offset="1" stop-color="#046AB4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LoginPage8;
