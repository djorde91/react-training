import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../styles/themes';

import ClickCounter from '../ClickCounter/ClickCounter';

describe('ClickCounter Component', () => {
  let clickCounter;
  let increment;
  let decrement;
  let reset;
  let counter;

  beforeEach(() => {
    clickCounter = render(
      <ThemeProvider theme={darkTheme}>
        <ClickCounter
          id="testClickCounter"
          counter={{ initial: 10, max: 15, min: 0 }}
        />
      </ThemeProvider>
    );
    increment = clickCounter.container.querySelector(
      'button[id="incrementCounter"]'
    );
    decrement = clickCounter.container.querySelector(
      'button[id="decrementCounter"]'
    );
    reset = clickCounter.container.querySelector('button[id="resetCounter"]');
    counter = clickCounter.container.querySelector('#counterValue');
  });

  test('increment, decrement and reset buttons have specific ID', () => {
    expect(increment).toBeInTheDocument();
    expect(decrement).toBeInTheDocument();
    expect(reset).toBeInTheDocument();
  });
  test('Initial counter value matches counter.initial prop', () => {
    const counterValue = counter.getAttribute('value');

    expect(counterValue).toBe('10');
  });
  test('Increment counter works', () => {
    userEvent.click(increment);

    const counterValue = counter.getAttribute('value');

    expect(counterValue).toBe('11');
  });
  test('Decrement counter works', () => {
    userEvent.click(decrement);
    const counterValue = counter.getAttribute('value');

    expect(counterValue).toBe('9');
  });
  test('Reset counter works and restores counter to counter.initial props value', () => {
    userEvent.click(increment);
    userEvent.click(reset);
    const counterValue = counter.getAttribute('value');

    expect(counterValue).toBe('10');
  });
});
