import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../styles/themes';

import Header from '../Header/Header';

describe('Header Component', () => {
  let header;
  beforeEach(() => {
    header = render(
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Header />
        </Router>
      </ThemeProvider>
    );
  });

  test('img with logo.svg is present', () => {
    const logo = header.container.querySelector("img[src='logo.svg']");

    expect(logo).toBeInTheDocument();
  });
  test('has a <nav> element', () => {
    const nav = header.container.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });
});
