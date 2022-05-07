import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/themes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Separator from './components/Separator/Separator';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Header id="app-header" />
        <Separator id="headerSeparator" />
        <Separator id="buttonSeparator" styleType="secondary" />
        <Separator id="counterSeparator" />
      </div>
    </ThemeProvider>
  );
}

export default App;
