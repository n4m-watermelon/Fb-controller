import React from "react";

import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const logInToFB = React.useCallback(() => {
    window.FB.login((response) => {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("accessToken", response.authResponse.accessToken);
      history.push("/");
    });
  }, []);

  let checkLogin  = localStorage.getItem('isLogin')
  if (checkLogin) {
    history.push("/");
  }

  return (
    <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] shadow bg-white p-6 rounded-[6px]">
      <div className="mb-5 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">
        Welcome to!
      </div>
      <div
        onClick={logInToFB}
        className="font-semibold items-center text-white  bg-blue-400 p-4 rounded-[5px] cursor-pointer text-center"
      >

        Connect with Facebook
      </div>
    </div>
  );
}

export default Login;
