import React from "react";
import "./index.css";
import jogging from './jogging.svg'
function LoginPage9() {
  return (
    <div>
      <div className="login-page-9">
        <div className="row h-100 align-items-center">
          <div className="col-md-4">
            <div className="text-part d-flex flex-column">
              <h1>LOGIN</h1>

              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />

              <button>LOGIN</button>
            </div>
          </div>
          <div className="col-md-8 d-flex justify-content-center">
              <img src={jogging} className="w-50"/>
          </div>
        </div>

        <div className="curve">
          <svg
            width="769"
            height="901"
            viewBox="0 0 769 901"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M874.5 54.0001C792.5 289.5 1154.5 1068.5 547.958 977C356.292 977 0.0419922 1152.5 0.0419922 936C314.5 636.5 0.0419922 243 417 415C850 614 654.5 -706.5 874.5 54.0001Z"
              fill="#FFE600"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LoginPage9;
