import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  const app = render(<App />);
  test('has a <header> element', () => {
    const header = app.container.querySelector('header');

    expect(header).toBeInTheDocument();
  });
  test('footer is not present.', () => {
    const footer = app.container.querySelector('footer');

    expect(footer).toBeNull();
  });
});
