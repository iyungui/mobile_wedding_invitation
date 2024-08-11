import React, { useEffect } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import Profile from './components/Profile';
import Calendar from './components/Calendar';
import Map from './components/Map';
import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Message />
      <Profile />
      <Calendar />
      <Map />
    </div>
  );
}

export default App;
