import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../pages/Login'

function App() {
  return (
    <div className="App">
      hello
      <Routes>
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
