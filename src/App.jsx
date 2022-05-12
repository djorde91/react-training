import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/themes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import TextSizeChangerPage from './pages/TextSizeChangerPage/TextSizeChangerPage';
import ClickCounterPage from './pages/ClickCounterPage/ClickCounterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <GlobalStyles />
        <div className="App">
          <Header id="app-header" />
          <div>
            <Routes>
              <Route
                exact
                path="/text-size-changer"
                element={<TextSizeChangerPage />}
              />
              <Route
                exact
                path="/click-counter"
                element={<ClickCounterPage />}
              />
              <Route exact path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
