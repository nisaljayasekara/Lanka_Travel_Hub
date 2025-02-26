// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import DestinationList from './components/DestinationList';
import Aboutus from "./components/Aboutus";
import Experience from "./components/Exprience";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
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
