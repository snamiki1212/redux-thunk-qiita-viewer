import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './containers/Body';
import NextButton from './containers/NextButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <NextButton />
      <Footer />
    </div>
  );
}

export default App;
