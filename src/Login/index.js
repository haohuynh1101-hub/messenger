import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import "./Login.css";
function Login(props) {
  const dispatch = useDispatch();
  const login = async (e) => {
    e.preventDefault();
    console.log(auth, "auth");
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <form>
        <div>
          <div className="login__logo">
            <img
              src="https://i.pinimg.com/originals/98/1a/ea/981aea34c2ce10a6b39e3192a518b88e.png"
              alt="messenger"
            />
          </div>
          <h3>Messenger Facebook</h3>
          <div className="btn__signIn">
            <button onClick={login}>Sign In</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
