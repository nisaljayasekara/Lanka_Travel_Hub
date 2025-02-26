// src/App.tsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import Header from './components/Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './components/Home';
import Contact from './components/Contact';
import DestinationList from './components/DestinationList';
import Aboutus from "./components/Aboutus";
import Experience from "./components/Exprience";

function App() {
  return (
    <Router>
     
      <main>
        <Routes>
        <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Navigate to="/signup" replace />} /> {/* Redirect to Sign Up */}
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/exprience" element={<Experience />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
