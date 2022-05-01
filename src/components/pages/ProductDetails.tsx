import CounterButton from 'components/buttons/CounterButton';
import numeral from 'numeral';
import { useContext, useState } from 'react';
import { ActionType } from 'state/actions-types';
import { AppContext } from 'state/context';
import { ItemDetails } from 'state/reducers';
import CartIcon from 'assets/cart';

import './ProductDetails.css';
interface ProductDetailsProps {
  item: ItemDetails;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ item }) => {
  const { dispatch } = useContext(AppContext);
  const [amount, setAmount] = useState(0);
  return (
    <div className="page-details-body">
      <p className="pd-company">SNEAKER COMPANY</p>
      <h1>{item.name}</h1>
      <p className="pd-description">{item.description}</p>
      <div className="pd-prices">
        <span className="pd-item-price">
          {numeral(item.price).format('$0.00')}
          {item.discount !== 0 && (
            <span className="pd-item-discount">
              {' '}
              {numeral(item.discount).format('0%')}
            </span>
          )}
        </span>
        {item.discount !== 0 && (
          <span className="pd-item-discount-old-price">
            {' '}
            {numeral(item.price / item.discount).format('$0.00')}
          </span>
        )}
      </div>
      <div className="pd-buttons">
        <CounterButton setAmount={setAmount} amount={amount} />
        <button
          className="call-to-action-btn"
          disabled={amount ? false : true}
          onClick={() => {
            dispatch({
              type: ActionType.ADD_TO_CART,
              payload: { ...item, quantity: amount },
            });
            setAmount(0);
          }}
        >
          <CartIcon color="white" viewBox="0 4 40 18" width="30" height="30" />{' '}
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
