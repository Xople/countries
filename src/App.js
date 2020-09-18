import React, { useState, useEffect } from 'react';
import Home from './components/pages/Home';
import Header from './components/layout/Header';
import DetailCountry from './components/pages/DetailCountry';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './assets/scss/main.scss';

function App() {
  const [themeDark, setThemeDark] = useState(false)
  const [bgColor, setBgColor] = useState(
    {
      background: 'hsl(0, 0%, 100%)',
      colorInput: 'hsl(0, 0%, 52%)',
      color: 'hsl(209, 23%, 22%)'
    }
  )

  const changeDarkMode = val => {
    setThemeDark(val)

    if (val) {
      setBgColor(
        {
          background: 'hsl(207, 26%, 17%)',
          background2: 'hsl(209, 23%, 22%)',
          colorInput: 'hsl(0, 0%, 98%)',
          color: 'hsl(0, 0%, 98%)'
        }
      )
    } else {
      setBgColor(
        {
          background: 'hsl(0, 0%, 100%)',
          background2: 'hsl(0, 0%, 100%)',
          colorInput: 'hsl(0, 0%, 52%)',
          color: 'hsl(209, 23%, 22%)'
        }
      )
    }
  }

  return (
    <Router>
      <Header darkMode={changeDarkMode} themeDark={themeDark} bgColor={bgColor} />

      <Switch>
        <Route exact path="/" render={() => <Home bgColor={bgColor} />} />

        <Route path="/:alphaCode">
          <DetailCountry bgColor={bgColor} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
