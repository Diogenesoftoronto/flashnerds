// import logo from './logo.svg';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { AuthProvider } from  './contexts/AuthContext'
import './App.css';
import Search from './components/Navbar/Search';
import Dashboard from "./pages/Dashboard";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import MyLibrary from "./pages/MyLibrary";
import DeckCreate from "./pages/DeckCreate";
import DeckUpdate from "./pages/DeckUpdate";
import FlashcardDetails from "./pages/FlashcardDetails";
import FlashcardUpdate from ".pages/FlashcardUpdate";
import UserUpdate from "./pages/UserUpdate";

function App() {  return (
  <AuthProvider>
    <Search />
    <Router>
        <Routes>
          <Route path="/" element={ <Dashboard /> } />

          {/* AuthRoutes */}
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/logout" element={ <Logout /> } />

          <Route path="/mylibrary" element={ <MyLibrary /> } />

          {/* flashRoutes */}
          <Route path="/decks/:id" element={ <Dashboard /> } />
          <Route path="/decks/create" element={ <DeckCreate /> } />
          <Route path="/decks/:id/update" element={ <DeckUpdate /> } />
          <Route path="/flashcards/:id" element={ <FlashcardDetails /> } />
          <Route path="/flashcards/:id/update" element={ <FlashcardUpdate /> } />
          <Route path="/users/:id/update" element={ <UserUpdate /> } />
        </Routes>
    </Router>
  </AuthProvider>);
}

export default App;
