import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

// Solving issues with tests If some code uses a method which JSDOM (the DOM implementation used by Jest) hasn't implemented yet, testing it is not easily possible.
//  This is e.g. the case with window.matchMedia(). Jest returns TypeError: window.matchMedia is not a function and doesn't properly execute the test.

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

afterEach(cleanup);

describe('NavBar', () => {
  it('should render properly with default props', () => {
    render(<NavBar />);

    expect(screen.getAllByRole('button').length).toBeTruthy();
    expect(screen.getByAltText('avatar')).toBeInTheDocument();
    expect(screen.getByTitle('Logo')).toBeInTheDocument();
    // Check if cart dialog is rendered properly
    expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument();
  });
});
