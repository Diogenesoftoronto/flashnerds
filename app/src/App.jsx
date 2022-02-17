import logo from './logo.svg';
import './App.css';

function App() {  return (
  <AuthProvider>
    <Router>
        <Routes>
          <Route path="/" element={ <Dashboard /> } />

          {/* AuthRoutes */}
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/logout" element={ <Logout /> } />

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
