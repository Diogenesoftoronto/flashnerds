import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("login!");
    navigate("/home");
  };

  return (
    <div>
      <img src="/books.png" alt="logo" />
      <form onSubmit={handleSubmit} method="post">
        <div>
          <input type="text" name="" id="" />
        </div>
        <div>
          <input type="password" name="" id="" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
