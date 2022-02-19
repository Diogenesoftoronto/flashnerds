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
    }).catch(e => {
        console.error(e); alert('login failed');
    });
  };

  return (
    <div>
      <img src="/books.png" alt="logo" />
      <form onSubmit={handleSubmit} method="post">
        <div>
          <input type="text" name="" id="" 
            defaultValue={userName} 
            onChange={(e) => setUserName(e.currentTarget.value)} />
        </div>
        <div>
          <input type="password" name="" id="" 
            defaultValue={password} 
            onChange={(e) => setPassword(e.currentTarget.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
