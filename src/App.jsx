import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
    	<Home />
      <Footer/>
    </>
  );
}

export default App;
