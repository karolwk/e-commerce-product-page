import './NextButton.css';
interface NextButtonProps {
  onClick(): void;
  btnClass?: string;
  iconClass?: string;
}

const NextButton: React.FC<NextButtonProps> = ({
  onClick,
  btnClass = 'next-btn',
  iconClass = 'next-btn-icon',
}) => {
  return (
    <button aria-label="next" className={btnClass} onClick={onClick}>
      <svg
        className={iconClass}
        width="12"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default NextButton;
