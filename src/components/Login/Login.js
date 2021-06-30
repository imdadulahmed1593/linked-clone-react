import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Login.css";

function Login() {
  const [wannaLogIn, setWannaLogIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (!name) {
      return alert("Please enter a full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    console.log(" login clicked");

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png"
          alt=""
        />

        <form>
          {!wannaLogIn && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name (required if registering)"
            />
          )}
          {!wannaLogIn && (
            <input
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              type="text"
              placeholder="Profile pic URL (optional-use your fb pp url)"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" onClick={wannaLogIn ? loginToApp : register}>
            {wannaLogIn ? "Sign In" : "Register"}
          </button>
        </form>

        <p>
          {wannaLogIn ? "Not" : "Already"} a member?{" "}
          <span
            className="login__register"
            onClick={(e) => setWannaLogIn(!wannaLogIn)}
          >
            {wannaLogIn ? "Register Now" : "Login Now"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
