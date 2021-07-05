import './App.scss';
import { useState } from 'react';
import Attribution from './components/Attribution';
import Header from './components/Header';
import Overview from './components/Overview';
import Summary from './components/Summary';
import React from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={"App " + (isDark ? "dark" : "")}>
      <div className="background"></div>
      <div className="content">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Summary />
        <Overview />
      </div>
      <Attribution />
    </div>
  );
}

export default App;
