import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/themes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Separator from './components/Separator/Separator';
import TextSizeChanger from './components/TextSizeChanger/TextSizeChanger';
import ClickCounter from './components/ClickCounter/ClickCounter';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Header id="app-header" />
        <Separator id="appHeaderSeparator" />

        <TextSizeChanger id="appSizeChanger" />
        <Separator id="appTextSizeChangerSeparator" />

        <ClickCounter id="appClickCounter" />
        <Separator id="appClickCounterSeparator" styleType="secondary" />
      </div>
    </ThemeProvider>
  );
}

export default App;
