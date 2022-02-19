import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

function Register(props) {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${email}, ${password}`);
    register(userName, email, password)
    .then(response => {
        console.log(response);
        alert("Register!");
        navigate("/");
    }).catch(e => {
        console.error(e); alert('registration failed');
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
          <input type="email" name="" id="" 
            defaultValue={email} 
            onChange={(e) => setEmail(e.currentTarget.value)} />
        </div>
        <div>
          <input type="password" name="" id="" 
            defaultValue={password} 
            onChange={(e) => setPassword(e.currentTarget.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
