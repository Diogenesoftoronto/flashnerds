// import logo from './logo.svg';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from  './contexts/AuthContext'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home";

// import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthTest from "./pages/AuthTest";
// import Logout from "./pages/Logout";

import MyLibrary from "./pages/MyLibrary";
import DeckCreate from "./pages/DeckCreate";
// import DeckUpdate from "./pages/DeckUpdate";
// import FlashcardDetails from "./pages/FlashcardDetails";
// import FlashcardUpdate from "./pages/FlashcardUpdate";
// import UserUpdate from "./pages/UserUpdate";

function App() {  
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/mylibrary" element={ <MyLibrary /> } />
        <Route path="/decks/create" element={ <DeckCreate /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/authTest" element={ <AuthTest /> } />
      </Routes>
    </Router>
    </AuthProvider>

  // <AuthProvider>
  //   <Router>
  //       <Routes>
  //         {/* AuthRoutes */}
  //         {/* <Route path="/register" element={ <Register /> } />
  //         <Route path="/logout" element={ <Logout /> } />


  //         {/* flashRoutes */}
  //         {/* <Route path="/decks/:id" element={ <Dashboard /> } />
  //         <Route path="/decks/create" element={ <DeckCreate /> } />
  //         <Route path="/decks/:id/update" element={ <DeckUpdate /> } />
  //         <Route path="/flashcards/:id" element={ <FlashcardDetails /> } />
  //         <Route path="/flashcards/:id/update" element={ <FlashcardUpdate /> } /> */}
  //         {/* <Route path="/users/:id/update" element={ <UserUpdate /> } /> */}
  //       </Routes>
  //   </Router>
  // </AuthProvider>
  );
}

export default App;
