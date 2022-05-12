import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../styles/themes';

import Navigation from '../Navigation/Navigation';

describe('Navigation Component', () => {
  let navigation;
  beforeEach(() => {
    navigation = render(
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Navigation />
        </Router>
      </ThemeProvider>
    );
  });

  test('has a <nav> element', () => {
    const nav = navigation.container.querySelector('nav');

    expect(nav).toBeInTheDocument();
  });
  test('specific links are present', () => {
    const link1 = navigation.container.querySelector("a[href='/login']");
    const link2 = navigation.container.querySelector(
      "a[href='/text-size-changer']"
    );
    const link3 = navigation.container.querySelector(
      "a[href='/click-counter']"
    );

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();
  });
});
