import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/themes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Header id="app-header" />
      </div>
    </ThemeProvider>
  );
}

export default App;
