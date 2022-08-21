import './App.scss';
import React, { useRef } from "react";
import useScrollSnap from 'react-use-scroll-snap';
import { Header } from './components/Header/Header';
import { WithoutInternet } from './components/WithoutInternet';
import { Description } from './components/Description';
import { Partners } from './components/Partners';
import { Total } from './components/Total/Total';

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <div className="App" ref={scrollRef}>
      <Header />
      <WithoutInternet />
      <Description />
      <Partners />
      <Total />
    </div>
  );
}

export default App;
