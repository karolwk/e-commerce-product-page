import { useContext } from 'react';
import { ActionType } from 'state/actions-types';
import { AppContext } from '../../state/context';
import numeral from 'numeral';
import './CartDialog.css';
import DeleteIcon from '../../assets/delete';

const CartDialog: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <div className="cart-header">
        <h1>Cart</h1>
      </div>

      {!state.itemCount ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-items">
          {state.items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                alt="item-thumbnail"
                className="cart-item-img"
                src={item.imgPath}
              />
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">
                {`${numeral(item.price).format('$0,0.00')} x ${item.quantity}`}
                <span>
                  {' ' + numeral(item.price * item.quantity).format('$0,0.00')}
                </span>
              </p>
              <button
                aria-label="remove-item"
                onClick={() => {
                  dispatch({
                    type: ActionType.REMOVE_FROM_CART,
                    payload: item.id,
                  });
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          ))}
          <button className="call-to-action-btn">Checkout</button>
        </div>
      )}
    </>
  );
};

export default CartDialog;
