import { useContext } from 'react';
import { AppContext } from 'state/context';
import CartIcon from '../../assets/cart';
import './CartButton.css';

interface CartButtonProps {
  onBtnClick(): void;
  cssClass?: string;
  style?: {};
}

const CartButton: React.FC<CartButtonProps> = ({
  onBtnClick,
  cssClass = 'nav-cart-btn',
  style,
}) => {
  const { state } = useContext(AppContext);

  return (
    <button
      aria-label="cart"
      className={cssClass}
      style={style}
      onClick={onBtnClick}
    >
      <CartIcon color="black" />
      {state.itemCount !== 0 && (
        <div className="nav-cart-btn-counter" data-testid="cartAmount">
          {state.itemCount}
        </div>
      )}
    </button>
  );
};

export default CartButton;
