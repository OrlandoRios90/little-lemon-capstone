
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Chicago from './components/Chicago';
import BookingForm from './components/BookingForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Header/>
    <Nav/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/about" element={<Chicago />} />
      <Route path="/reservations" element={<BookingForm />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
