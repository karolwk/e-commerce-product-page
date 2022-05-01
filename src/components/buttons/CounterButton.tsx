import MinusIcon from 'assets/minus';
import PlusIcon from '../../assets/plus';
import './CounterButton.css';

interface CounterButtonProps {
  amount: number;
  setAmount(n: number): void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ setAmount, amount }) => {
  const addRemove = (n: number): void => {
    if (n <= 0) {
      setAmount(0);
      return;
    }
    setAmount(n);
  };

  return (
    <div className="counter-btn">
      <button
        aria-label="substract amount"
        onClick={() => addRemove(amount - 1)}
      >
        <MinusIcon />
      </button>
      <span>{amount}</span>
      <button aria-label="add amount" onClick={() => addRemove(amount + 1)}>
        <PlusIcon />
      </button>
    </div>
  );
};

export default CounterButton;
