
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
   <>
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
  </>
  );
}

export default App;
