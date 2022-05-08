import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/themes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Separator from './components/Separator/Separator';
import Button from './components/Button/Button';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Header id="app-header" />
        <Separator id="headerSeparator" />

        <Button id="basicButton" />
        <Button
          id="basicButton2"
          className="dummy-extra-button-class"
          styleType="secondary"
          text="secondary styled button"
        />
        <Separator id="buttonsSeparator" styleType="secondary" />

        <Separator id="counterSeparator" />
      </div>
    </ThemeProvider>
  );
}

export default App;
