import App from './App';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';

afterEach(cleanup);

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

describe('App', () => {
  it('user should add specified number of items to cart', async () => {
    render(<App />);
    const addAmountBtn = screen.getByRole('button', { name: 'add amount' });
    const subAmountBtn = screen.getByRole('button', {
      name: 'substract amount',
    });
    const addToCartBtn = screen.getByText(/add to cart/i);
    user.click(addAmountBtn);
    user.click(addAmountBtn);
    user.click(subAmountBtn);
    user.click(addAmountBtn);
    user.click(addToCartBtn);
    await waitFor(() => screen.findByTestId('cartAmount'));
    expect(screen.getByTestId('cartAmount')).toHaveTextContent('2');
    user.click(addAmountBtn);
    user.click(addToCartBtn);
    let amount = await screen.findByTestId('cartAmount');
    expect(amount).toHaveTextContent('3');
    user.click(addToCartBtn);
    user.click(addToCartBtn);
    amount = await screen.findByTestId('cartAmount');
    expect(amount).toHaveTextContent('3');
  });

  it('user deletes, items from cart', async () => {
    render(<App />);

    const addAmountBtn = screen.getByRole('button', { name: 'add amount' });
    const addToCartBtn = screen.getByText(/add to cart/i);
    user.click(addAmountBtn);
    user.click(addAmountBtn);
    user.click(addToCartBtn);
    await waitFor(() => screen.findByRole('button', { name: 'remove-item' }));
    const removeBtn = screen.getByRole('button', { name: 'remove-item' });
    user.click(removeBtn);
    await waitFor(() => screen.findByText(/your cart is empty/i));
  });
});
