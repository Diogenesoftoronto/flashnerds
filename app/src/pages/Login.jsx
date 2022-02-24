import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

function Login(props) {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userName}, ${password}`);
    login(userName, password).then(response => {
        console.log(response);
        alert("login!");
        navigate("/");
    }).catch(error => {
        alert('login failed: ' + error.message);
    });
  };

  return (
    <div className="login">
      <img src="/FlashNerds.png" alt="logo" />
      <form onSubmit={handleSubmit} method="post">
      <div>
          <label for="userName">🤓</label>
          <input type="text" name="userName" id="userName" 
            defaultValue={userName} placeholder="Username"
            onChange={(e) => setUserName(e.currentTarget.value)} />
        </div>
        <div>
        <label for="password">🔐</label>
          <input type="password" name="password" id="password" 
            defaultValue={password} placeholder="Password"
            onChange={(e) => setPassword(e.currentTarget.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
