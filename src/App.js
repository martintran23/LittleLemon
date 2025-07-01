import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage'; // ← Add this

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <CallToAction />
                <Specials />
                <CustomersSay />
                <Chicago />
              </main>
            }
          />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
