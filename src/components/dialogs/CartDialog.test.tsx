import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import CartDialog from './CartDialog';

afterEach(cleanup);

describe('CartDialog', () => {
  it('should render properly, with starting state', () => {
    render(<CartDialog />);
    expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument();
  });
});
