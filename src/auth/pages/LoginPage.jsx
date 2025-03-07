import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Gabriel Vergara");

    // console.log(login);

    navigate(lastPath, {
      replace: true,
    });
    // localStorage.setItem("logged", "true");
    // const lastPath = localStorage.getItem("lastPath") || "/";
    // window.location.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
